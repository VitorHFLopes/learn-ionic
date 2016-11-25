angular.module('appModule')

    .controller('CallCtrl', function ($scope, $state) {

        window.ga.trackView('Call');

        $scope.phone = '11111111111';
        
        $scope.makeACall = function (phoneNumber) {
            window.ga.trackEvent('User', 'Made a call');
            window.open('tel:' + phoneNumber, '_system');
        };

        $scope.goBack = function (state) {
            window.ga.trackEvent('User', 'Back to Home');
            $state.go(state);
        };

    })

;