angular.module('appModule')

    .controller('LoginCtrl', function ($scope, $state) {

        $scope.facebookSignIn = function () {
            facebookConnectPlugin.login(["public_profile"], function (response) {
                console.log(response);
                $state.go('home');
            });
        };

    })

;