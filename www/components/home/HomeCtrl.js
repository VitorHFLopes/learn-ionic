angular.module('appModule')

    .controller('HomeCtrl', function ($scope, $state, DataStorage) {

        window.ga.trackView('Home');

        $scope.loggedUserWithGooglePlus = DataStorage.get('googlePlusBasicData');

        $scope.goToProject = function (project) {
            window.ga.trackEvent('Projects', 'Go To Project: ' + project);
            $state.go(project)
        };

    })

;