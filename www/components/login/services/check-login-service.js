angular.module('appModule')

    .service('CheckLoginService', function () {

        function facebookLogin() {
            facebookConnectPlugin.login(["public_profile"], function (response) {
                console.log(response);
                return response.status;
            });
        }

        return {
            facebookLogin: facebookLogin
        }

    })

;