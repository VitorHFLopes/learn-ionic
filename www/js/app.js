angular.module('appModule', [
    'ionic',
    'ionic.cloud',
    'ngStorage',
    'ui.router',
    'angularMoment',
    'ngCordova',
    'ui.calendar'
])

    .config(function($ionicCloudProvider, $compileProvider) {
        $ionicCloudProvider.init({
            "core": {
                "app_id": "e2ccf9f7"
            }
        });

        $compileProvider.debugInfoEnabled(false); //Use this in production to improve performance
    })


    .run(function($ionicPlatform, amMoment, googleAnalyticsAbstraction) {

        amMoment.changeLocale('pt-br');

        //Start ready
        $ionicPlatform.ready(function () {

            //GoogleAnalyticsAbstraction.startTrackerWithId('UA-88009076-1', 10);

        });
        //End ready

    })

;
