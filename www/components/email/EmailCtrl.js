angular.module('appModule')

    .controller('EmailCtrl', function ($scope, $state) {

        $scope.email = 'vitor@mixd.com.br';

        $scope.goBack = function (state) {
            $state.go(state);
        };
        
    })

;