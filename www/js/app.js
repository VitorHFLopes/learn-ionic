angular.module('appModule', [
    'ionic',
    'ionic.cloud',
    'ngStorage',
    'ui.router',
    'angularMoment',
    'ngCordova',
    'ui.calendar'
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

            //GoogleAnalyticsAbstraction.startTrackerWithId('UA-88009076-1', 10);

            // Enable pusher logging - don't include this in production
            Pusher.logToConsole = true;

            var pusher = new Pusher('d690b1c32d4e154eb7b3', {
                encrypted: true
            });

            var channel = pusher.subscribe('rodobens-chat');
            channel.bind('new-message', function(data) {
                alert('An event was triggered with message: ' + data.text);
            });

            $ionicPlatform.on('pause', function () {
                pusher.disconnect();
            })

        });
        //End ready

    })

;
