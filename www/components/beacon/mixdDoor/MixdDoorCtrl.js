angular.module('appModule')

    .controller('MixdDoorCtrl', function ($http, $ionicPlatform, $ionicPopup, $scope, moment) {

        $scope.stateInRegion = {};
        var lastExit = moment().subtract(3, 'minutes');
        var lastEnter = '';

        $ionicPlatform.ready(function () {

            var locationManager = cordova.plugins.locationManager;
            var delegate = new cordova.plugins.locationManager.Delegate();

            //Create a region that monitors beacons with the specified uuid, major ou minor
            var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(
                'Sede MIXD', 'B9407F30-F5F8-466E-AFF9-25556B57FE6D', 36926, 6251
            );

            //Check bluetooth availability
            cordova.plugins.locationManager.isBluetoothEnabled()
                .then(function(isBluetoothEnabled){ //Return a boolean
                    if (!isBluetoothEnabled) {
                        $ionicPopup.confirm({
                            title: 'Por favor, ligue o bluetooth',
                            template: 'Clique em OK para ligar o bluetooth'
                        }).then(function (answer) {
                            if(answer) {
                                cordova.plugins.locationManager.enableBluetooth();
                            }
                        })
                    }
                })
                .fail(function(e) { console.error(e); })
                .done();

            //Check location - GPS availability
            cordova.plugins.diagnostic.isLocationEnabled(function (isLocationEnabled) { //Return a boolean
                if(!isLocationEnabled) {
                    $ionicPopup.confirm({
                        title: 'Por favor, ligue a sua localização',
                        template: 'Clique em OK para acessar as configurações de localização'
                    }).then(function (answer) {
                        if(answer) {
                            cordova.plugins.diagnostic.switchToLocationSettings();
                        }
                    })
                }
            }, function (errorMessage) { //Return a string with the error
                console.error(errorMessage);
            });

            //Check if a monitoring region was started
            delegate.didStartMonitoringForRegion = function(pluginResult) {
                console.log('startou regiao', pluginResult);
            };

            //Check what is the state of a device for the beacon specified region (inside or outside)
            delegate.didDetermineStateForRegion = function (pluginResult) {
                lastEnter = moment();
                if((pluginResult.state === 'CLRegionStateInside') && (moment() > lastExit.add(2, 'minutes'))) {
                    $http.post('http://porta.mixd.com.br/open-door.php').then(function () {

                    });
                } else if(pluginResult.state === 'CLRegionStateOutside'){
                    lastExit = moment();
                }
                console.log('determinou estado', pluginResult);
            };

            cordova.plugins.locationManager.setDelegate(delegate);

            $scope.startMonitoringBeacons = function () {
                locationManager.startMonitoringForRegion(beaconRegion)
                    .fail(function (e) {
                        console.error(e);
                    })
                    .done();
            };

            $scope.stopMonitoringBeacons = function () {
                $scope.stateInRegion = {};
                lastExit = moment().subtract(3, 'minutes');
                locationManager.stopMonitoringForRegion(beaconRegion)
                    .fail(function (e) {
                        console.error(e);
                    })
                    .done();
            };

        });

    })

;