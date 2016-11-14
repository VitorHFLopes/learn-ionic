angular.module('appModule')

    .controller('CallCtrl', function ($scope, $state) {

        $scope.phone = '11111111111';
        
        $scope.makeACall = function (phoneNumber) {
            window.open('tel:' + phoneNumber, '_system');
        };

        $scope.goBack = function (state) {
            $state.go(state);
        };

    })

;