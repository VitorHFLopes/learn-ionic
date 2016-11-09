angular.module('appModule')

    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: 'components/home/home.html',
                controller: 'HomeCtrl'
            })

            .state('login', {
                url: '/login',
                templateUrl: 'components/login/login.html',
                controller: 'LoginCtrl'
            })

            .state('beacon', {
                url: '/beacon',
                templateUrl: 'components/beacon/beacon.html',
                controller: 'BeaconCtrl'
            })

            .state('ocr', {
                url: '/ocr',
                templateUrl: 'components/ocr/ocr.html',
                controller: 'OcrCtrl'
            });

    })

;
