angular.module('appModule')

    .controller('BeaconCtrl', function ($ionicPlatform, $ionicPopup, $scope) {


        $scope.beaconArray = [];
        $scope.showBeacon = false;

        $ionicPlatform.ready(function () {

            cordova.plugins.locationManager.isBluetoothEnabled()
                .then(function(isBluetoothEnabled){ //Retorna um boolean
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

            cordova.plugins.diagnostic.isLocationEnabled(function (isLocationEnabled) { //Retorna um boolean
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
            }, function (errorMessage) { //Retorna uma string com o erro
                console.error(errorMessage);
            });

            var delegate = new cordova.plugins.locationManager.Delegate();

            //Verifica se startou a regiao de monitoramento
            delegate.didStartMonitoringForRegion = function(pluginResult) {
                console.log('startou regiao', pluginResult);
            };

            //Determina o estado atual do beacon, dentro ou fora da regiao de monitoramento
            delegate.didDetermineStateForRegion = function (pluginResult) {
                console.log('determinou estado', pluginResult);
                $scope.beaconArray.push(pluginResult);
            };

            //Verifica se tem beacons por perto pela proximidade
            /*delegate.didRangeBeaconsInRegion = function (pluginResult) {
                console.log('beacons no range', pluginResult);
            };*/

            cordova.plugins.locationManager.setDelegate(delegate);

        });

        $scope.toShowBeacons = function () {
            $scope.showBeacon = true;
        };

        $scope.toHideBeacons = function () {
            $scope.showBeacon = false;
        };

    })

;
