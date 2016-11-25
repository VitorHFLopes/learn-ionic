angular.module('appModule')

    .controller('EmailCtrl', function ($scope, $state) {

        window.ga.trackView('Email');
        window.ga.trackEvent('User', 'Send an email');

        $scope.email = 'vitor@mixd.com.br';

        $scope.goBack = function (state) {
            window.ga.trackEvent('User', 'Back to Home');
            $state.go(state);
        };
        
    })

;