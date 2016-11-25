angular.module('appModule')

    .controller('BeaconCtrl', function ($ionicPlatform, $ionicPopup, $scope) {

        window.ga.trackView('Beacons');

        $scope.showBeacon = false;
        $scope.beaconArray = [];

        //Initialize beacons objects
        $scope.nearestBeacon = {
            uuid: '',
            major: '',
            minor: '',
            proximity: ''
        };

        var nearestBeaconFound = {
            uuid: '',
            major: '',
            minor: '',
            proximity: ''
        };

        $scope.updateBeacons = function () {
            $scope.showBeacon = true;
        };

        $ionicPlatform.ready(function () {

            var locationManager = cordova.plugins.locationManager;

            //Cria uma região que monitora os beacons que possuam o uuid, major ou minor passados a função
            var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(
                'Regiao', 'B9407F30-F5F8-466E-AFF9-25556B57FE6D', 36926
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

            var delegate = new cordova.plugins.locationManager.Delegate();

            //Check if a monitoring region was started
            delegate.didStartMonitoringForRegion = function(pluginResult) {
                console.log('startou regiao', pluginResult);
            };

            //Check what is the state of a device for the beacon specified region (inside or outside)
            delegate.didDetermineStateForRegion = function (pluginResult) {
                console.log('determinou estado', pluginResult);
                $scope.beaconArray.push(pluginResult);
            };

            //Check if there are beacons in range of a specified region
            delegate.didRangeBeaconsInRegion = function (pluginResult) {
                var beacons = pluginResult.beacons;

                for(var i = 0; i < beacons.length; i++) {
                    if(beacons[i].proximity === 'ProximityImmediate') {
                        if(beacons[i].minor !== nearestBeaconFound.minor) {
                            nearestBeaconFound = beacons[i];
                            $scope.$apply(function(){
                                window.ga.trackEvent('User', 'Beacon Found');
                                $scope.nearestBeacon = nearestBeaconFound;
                            });
                        }
                    }
                }

                console.log('beacons no range', pluginResult);
            };

            cordova.plugins.locationManager.setDelegate(delegate);

            $scope.stopRangingBeacons = function () {
                locationManager.stopRangingBeaconsInRegion(beaconRegion)
                    .fail(function (e) {
                        console.error(e);
                    })
                    .done();
            };

            $scope.startRangingBeacons = function () {
                locationManager.startRangingBeaconsInRegion(beaconRegion)
                    .fail(function (e) {
                        console.error(e);
                    })
                    .done();
            }

        });

    })

;
