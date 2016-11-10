angular.module('appModule')

    .controller('LoginCtrl', function ($scope, $state, responseGoogle) {

        console.log(responseGoogle);

        /*if(loginStatus.status === 'connected') {
            $state.go('home');
        } else {
            //Facebook Login
            $scope.facebookSignIn = function facebookSignIn() {
                facebookConnectPlugin.login(["public_profile"], function (success) {
                    console.log(success);
                    $state.go('home');
                }, function loginError (error) {
                    console.error(error)
                });
            }
        }*/

    })

;