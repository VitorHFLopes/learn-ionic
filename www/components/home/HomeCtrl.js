angular.module('appModule')

    .controller('HomeCtrl', function ($ionicPlatform, $scope, $state, DataStorage, GoogleAnalyticsAbstraction) {

        //GoogleAnalyticsAbstraction.trackView('Home');

        $scope.loggedUserWithGooglePlus = DataStorage.get('googlePlusBasicData');

        $scope.goToProject = function (project) {
            //GoogleAnalyticsAbstraction.trackEvent('Projects', 'Go To Project: ' + project);
            $state.go(project)
        };

    })

;