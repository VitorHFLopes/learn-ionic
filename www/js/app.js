angular.module('appModule', [
    'ionic',
    'ionic.cloud',
    'ngStorage',
    'ui.router',
    'angularMoment',
    'ngCordova',
    'ui.calendar'
])
    .config(configApp)
    .run(runApp);

function configApp($compileProvider, $ionicCloudProvider, $stateProvider) {

    var cloudProviderOptions = {
        core: {
            app_id: 'e2ccf9f7'
        }
    };

    $ionicCloudProvider.init(cloudProviderOptions);

    $compileProvider.debugInfoEnabled(false); //Use this in production to improve performance

    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: 'components/login/login.html',
            controller: 'LoginCtrl'
        })

        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'components/menu/menu.html',
            controller: 'MenuCtrl'
        })

        .state('app.home', {
            url: '/home',
            views: {
                'menuContent': {
                    templateUrl: 'components/home/home.html',
                    controller: 'HomeCtrl'
                }
            }
        })

        .state('app.inheritance', {
            url: '/inheritance',
            abstract: true,
            views: {
                'menuContent': {
                    templateUrl: 'components/inheritance/inheritance-template.html',
                    controller: 'InheritanceCtrl'
                }
            }
        })

        .state('app.inheritance.home', {
            url: '/home',
            views: {
                'inheritanceContent': {
                    templateUrl: 'components/inheritance/home/inheritance-home.html',
                    controller: 'InheritanceHomeCtrl'
                }
            }
        })

        .state('app.inheritance.next', {
            url: '/next',
            views: {
                'inheritanceContent': {
                    templateUrl: 'components/inheritance/next/inheritance-next.html',
                    controller: 'InheritanceNextCtrl'
                }
            }
        })

        .state('beacon', {
            url: '/beacon',
            templateUrl: 'components/beacon/beacon.html',
            controller: 'BeaconCtrl'
        })

        .state('call', {
            url: '/call',
            templateUrl: 'components/call/call.html',
            controller: 'CallCtrl'
        })

        .state('email', {
            url: '/email',
            templateUrl: 'components/email/email.html',
            controller: 'EmailCtrl'
        })

        .state('mixdDoor', {
            url: '/mixd-door',
            templateUrl: 'components/beacon/mixd-door/mixd-door.html',
            controller: 'MixdDoorCtrl'
        })

        .state('calendar', {
            url: '/calendar',
            templateUrl: 'components/calendar/calendar.html',
            controller: 'CalendarCtrl'
        })

        .state('socialShare', {
            url: '/social-share',
            templateUrl: 'components/social-share/social-share.html',
            controller: 'SocialShareCtrl'
        })
    ;
}

function runApp($ionicPlatform, $state, amMoment, googleAnalyticsAbstraction) {

    amMoment.changeLocale('pt-br');

    $ionicPlatform.ready(appIsReady);

    function appIsReady() {

        //GoogleAnalyticsAbstraction.startTrackerWithId('UA-88009076-1', 10);
        $state.go('login');
    }
}
