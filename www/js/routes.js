angular.module('appModule')

    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: 'components/home/home.html',
                controller: 'HomeCtrl'
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
