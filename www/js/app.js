angular.module('appModule', [
    'ionic',
    'ionic.cloud',
    'ngStorage',
    'ui.router'
])

    .run(function($ionicPlatform) {

        //Start ready
        $ionicPlatform.ready(function () {

            window.ga.startTrackerWithId('UA-88009076-1', 5);

            /*var beacons = [
                {
                    id: 'Candy',
                    uuid: 'B9407F30-F5F8-466E-AFF9-25556B57FE6D',
                    major: 36926,
                    minor: 6251
                },
                {
                    id: 'Beetroot',
                    uuid: 'B9407F30-F5F8-466E-AFF9-25556B57FE6D',
                    major: 36926,
                    minor: 6227
                },
                {
                    id: 'Lemon',
                    uuid: 'B9407F30-F5F8-466E-AFF9-25556B57FE6D',
                    major: 36926,
                    minor: 16050
                }
            ];

            for(var i = 0; i < beacons.length; i++) {
                var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(
                    beacons[i].id, beacons[i].uuid, beacons[i].major
                );

                var locationManager = cordova.plugins.locationManager;

                locationManager.startRangingBeaconsInRegion(beaconRegion)
                    .fail(function(e) {
                        console.error(e);
                    })
                    .done();

                locationManager.startMonitoringForRegion(beaconRegion)
                    .fail(function(e) {
                        console.error(e);
                    })
                    .done();
            }*/

            /*var locationManager = cordova.plugins.locationManager;

            //Cria uma região que monitora os beacons que possuam o uuid, major ou minor passados a função
            var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(
                'Regiao', 'B9407F30-F5F8-466E-AFF9-25556B57FE6D', 36926
            );

            locationManager.startRangingBeaconsInRegion(beaconRegion)
                .fail(function(e) {
                    console.error(e);
                })
                .done();*/

            /*locationManager.startMonitoringForRegion(beaconRegion)
                .fail(function(e) {
                    console.error(e);
                })
                .done();*/

        });
        //End ready

    })

;
