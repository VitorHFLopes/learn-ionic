angular.module('appModule')

    .controller('CallCtrl', function ($scope, $state, googleAnalyticsAbstraction) {

        //googleAnalyticsAbstraction.trackView('Call');

        $scope.phone = '11111111111';
        
        $scope.makeACall = function (phoneNumber) {
            //googleAnalyticsAbstraction.trackEvent('User', 'Made a call');
            window.open('tel:' + phoneNumber, '_system');
        };

        $scope.goBack = function (state) {
            //googleAnalyticsAbstraction.trackEvent('User', 'Back to Home');
            $state.go(state);
        };

    })

;