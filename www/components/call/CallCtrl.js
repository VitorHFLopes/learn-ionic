angular.module('appModule')

    .controller('CallCtrl', function ($scope, $state, GoogleAnalyticsAbstraction) {

        GoogleAnalyticsAbstraction.trackView('Call');

        $scope.phone = '11111111111';
        
        $scope.makeACall = function (phoneNumber) {
            GoogleAnalyticsAbstraction.trackEvent('User', 'Made a call');
            window.open('tel:' + phoneNumber, '_system');
        };

        $scope.goBack = function (state) {
            GoogleAnalyticsAbstraction.trackEvent('User', 'Back to Home');
            $state.go(state);
        };

    })

;