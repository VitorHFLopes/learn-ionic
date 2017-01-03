angular.module('appModule')

    .controller('EmailCtrl', function ($scope, $state, GoogleAnalyticsAbstraction) {

        //GoogleAnalyticsAbstraction.trackView('Email');
        //GoogleAnalyticsAbstraction.trackEvent('User', 'Send an email');

        $scope.email = 'vitor@mixd.com.br';

        $scope.goBack = function (state) {
            //GoogleAnalyticsAbstraction.trackEvent('User', 'Back to Home');
            $state.go(state);
        };
        
    })

;