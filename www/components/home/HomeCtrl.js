angular.module('appModule')

    .controller('HomeCtrl', function ($q, $scope, $state, LocalStorage) {

        var isUserLogged = LocalStorage.get('userLogged');
        var isUserLoggedWithFacebook = false;

        facebookConnectPlugin.getLoginStatus(function success(response) {
            isUserLoggedWithFacebook = true;
        }, function failure(error) {
            console.log(error);
        });

    })

;