angular.module('appModule')

    .controller('HomeCtrl', function ($ionicPlatform, $scope, $state, dataStorage, googleAnalyticsAbstraction) {

        //googleAnalyticsAbstraction.trackView('Home');

        $scope.loggedUserWithGooglePlus = dataStorage.get('googlePlusBasicData');

        $scope.goToProject = function (project) {
            //googleAnalyticsAbstraction.trackEvent('Projects', 'Go To Project: ' + project);
            $state.go(project)
        };

    })

;