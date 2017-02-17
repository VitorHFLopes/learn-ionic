angular.module('appModule')

    .controller('EmailCtrl', function ($scope, $state, googleAnalyticsAbstraction) {

        //googleAnalyticsAbstraction.trackView('Email');
        //googleAnalyticsAbstraction.trackEvent('User', 'Send an email');

        $scope.email = 'vitor@mixd.com.br';

        $scope.goBack = function (state) {
            //googleAnalyticsAbstraction.trackEvent('User', 'Back to Home');
            $state.go(state);
        };
        
    })

;