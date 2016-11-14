angular.module('appModule')

    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');

        $stateProvider

            .state('login', {
                url: '/login',
                templateUrl: 'components/login/login.html',
                controller: 'LoginCtrl'
            })

            .state('home', {
                url: '/home',
                templateUrl: 'components/home/home.html',
                controller: 'HomeCtrl'
            })

            //TODO test inherit states

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
        ;

    })

;
