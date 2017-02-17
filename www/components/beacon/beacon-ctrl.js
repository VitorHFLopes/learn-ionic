angular.module('appModule')

    .controller('BeaconCtrl', function ($cordovaBeacon, $cordovaLocalNotification, $http, $ionicPlatform, $ionicPopup, $rootScope, $scope, googleAnalyticsAbstraction) {

        //googleAnalyticsAbstraction.trackView('Beacons');

        $scope.showBeacon = false;
        $scope.beaconRegion = {};

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

            //PRIMEIRA IMPLEMENTACAO BEACON
            /*var locationManager = cordova.plugins.locationManager;

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
                cordova.plugins.locationManager.enableDebugNotifications();
                cordova.plugins.locationManager.enableDebugLogs();

                $scope.$apply(function () {
                    $scope.beaconRegion = pluginResult;
                });

                if(pluginResult.state === 'CLRegionStateInside') {
                    // $http.post('http://porta.mixd.com.br/open-door.php').then(function () {});
                    $cordovaLocalNotification.schedule({
                        id: 1,
                        title: "WELCOME",
                        text: "You just enter in region!"
                    })
                } else if (pluginResult.state === 'CLRegionStateOutside') {
                    $cordovaLocalNotification.schedule({
                        id: 1,
                        title: "BYE, BYE",
                        text: "See ya soon!"
                    })
                }

            };

            //Check if there are beacons in range of a specified region
            delegate.didRangeBeaconsInRegion = function (pluginResult) {
                var beacons = pluginResult.beacons;

                for(var i = 0; i < beacons.length; i++) {
                    if(beacons[i].proximity === 'ProximityImmediate') {
                        if(beacons[i].minor !== nearestBeaconFound.minor) {
                            nearestBeaconFound = beacons[i];
                            $scope.$apply(function(){
                                googleAnalyticsAbstraction.trackEvent('User', 'Beacon Found');
                                $scope.nearestBeacon = nearestBeaconFound;
                            });
                        }
                    }
                }

                console.log('beacons no range', pluginResult);
            };

            cordova.plugins.locationManager.setDelegate(delegate);

            //Control status ranging
            $scope.startRangingBeacons = function () {
                locationManager.startRangingBeaconsInRegion(beaconRegion)
                    .fail(function (e) {
                        console.error(e);
                    })
                    .done();
            };

            $scope.stopRangingBeacons = function () {
                locationManager.stopRangingBeaconsInRegion(beaconRegion)
                    .fail(function (e) {
                        console.error(e);
                    })
                    .done();
            };

            //Control status monitoring
            $scope.startMonitoringBeacons = function () {
                locationManager.startMonitoringForRegion(beaconRegion)
                    .fail(function (e) {
                        console.error(e);
                    })
                    .done();
            };

            $scope.stopMonitoringBeacons = function () {
                locationManager.stopRangingBeaconsInRegion(beaconRegion)
                    .fail(function (e) {
                        console.error(e);
                    })
                    .done();
            };*/
            //FIM PRIMEIRA IMPLEMENTACAO BEACON

            //NOVA IMPLEMENTACAO BEACON
            var beaconRegion = $cordovaBeacon.createBeaconRegion('Sede MIXD', 'B9407F30-F5F8-466E-AFF9-25556B57FE6D', 36926, 6251, true);

            $scope.startMonitoringBeacons = function () {
                $cordovaBeacon.getAuthorizationStatus().then(function (response) {
                    if(response.authorizationStatus === 'AuthorizationStatusAuthorized') {
                        $cordovaBeacon.startMonitoringForRegion(beaconRegion);
                    }
                    //TODO else solicite a autorizacao
                });
            };

            $scope.stopMonitoringBeacons = function () {
                return $cordovaBeacon.stopMonitoringForRegion(beaconRegion);
            };

            $cordovaBeacon.setCallbackDidStartMonitoringForRegion(function (pluginResult) {
                console.log(pluginResult);
            });

            $cordovaBeacon.setCallbackDidEnterRegion(function (pluginResult) {
                $scope.beaconRegion = pluginResult;
                $cordovaLocalNotification.schedule({
                    id: 1,
                    title: "WELCOME",
                    text: "You just enter in region!"
                })
            });

            $cordovaBeacon.setCallbackDidExitRegion(function () {
                $scope.beaconRegion = {};
                $cordovaLocalNotification.schedule({
                    id: 1,
                    title: "Bye, Bye",
                    text: "See ya soon!"
                })
            });

            //FIM NOVA IMPLEMENTACAO BEACON

        });

    })

;
