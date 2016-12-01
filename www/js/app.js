angular.module('appModule', [
    'ionic',
    'ionic.cloud',
    'ngStorage',
    'ui.router',
    'angularMoment',
    'ngCordova'
])

    .config(function($ionicCloudProvider) {
        $ionicCloudProvider.init({
            "core": {
                "app_id": "e2ccf9f7"
            }
        });
    })


    .run(function($ionicPlatform, amMoment, GoogleAnalyticsAbstraction) {

        amMoment.changeLocale('pt-br');

        //Start ready
        $ionicPlatform.ready(function () {

            backgroundService.registerForBootStart(function (success) {
               console.log(success);
            }, function (error) {
                console.log(error);
            });

            GoogleAnalyticsAbstraction.startTrackerWithId('UA-88009076-1', 10);

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
            ];*/

        });
        //End ready

    })

;
