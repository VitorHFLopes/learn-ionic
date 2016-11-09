angular.module('appModule')

    .controller('HomeCtrl', function ($q, $scope, $state, LocalStorage) {

        var isUserLogged = LocalStorage.get('userLogged');
        var isUserLoggedWithFacebook = false;

        facebookConnectPlugin.getLoginStatus(function success(response) {
            console.log(response);
            isUserLoggedWithFacebook = true;
        }, function failure(error) {
            console.log(error);
        });

        if(isUserLogged || isUserLoggedWithFacebook) {

            $scope.goToProject = function goToProject(projectState) {
                $state.go(projectState);
            };

        } else {
            $state.go('login');
        }

    })

;