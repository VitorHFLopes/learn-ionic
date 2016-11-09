angular.module('appModule')

    .controller('LoginCtrl', function ($scope, $state) {

        //Facebook Login
        $scope.facebookSignIn = function facebookSignIn() {
            facebookConnectPlugin.login(["public_profile"], function (success) {
                console.log(success);
                $state.go('home');
            }, function loginError (error) {
                console.error(error)
            });
        }

    })

;