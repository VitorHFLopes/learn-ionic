angular.module('appModule')

    .controller('HomeCtrl', function ($ionicPlatform, $scope) {

        $scope.beaconArray = [];
        $scope.showBeacon = false;

        $ionicPlatform.ready(function () {
            var delegate = new cordova.plugins.locationManager.Delegate();

            cordova.plugins.locationManager.setDelegate(delegate);

            //verifica se startou a regiao de monitoramento
            delegate.didStartMonitoringForRegion = function(pluginResult) {
                console.log('startou regiao', pluginResult);
            };

            //determina o estado atual do beacon, dentro ou fora da regiao de monitoramento
            delegate.didDetermineStateForRegion = function (pluginResult) {
                console.log('determinou estado', pluginResult);
                $scope.beaconArray.push(pluginResult);
            };

            //verifica se tem beacons por perto pela proximidade
            /*delegate.didRangeBeaconsInRegion = function (pluginResult) {
             console.log('beacons no range', pluginResult);
             }*/
        });

        $scope.toShowBeacons = function () {
            $scope.showBeacon = true;
        };

        $scope.toHideBeacons = function () {
            $scope.showBeacon = false;
        };

    })

;
