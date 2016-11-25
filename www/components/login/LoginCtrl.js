angular.module('appModule')

    .controller('LoginCtrl', function ($scope, $state, DataStorage) {

        $scope.facebookSignIn = function () {
            window.ga.trackEvent('User', 'Facebook login');
            facebookConnectPlugin.login(["public_profile"], function (response) {
                console.log(response);
                $state.go('home');
            });
        };

        $scope.googleSignIn = function () {
            window.ga.trackEvent('User', 'Google login');
            window.plugins.googleplus.login({
            }, function (response) { //SUCCESS
                console.log(response);
                DataStorage.set('googlePlusBasicData', response);
                $state.go('home');
            }, function (errorStatus) { //ERROR
                console.error(errorStatus);
            });
        };

        $scope.goHome = function () {
            window.ga.trackEvent('User', 'Just enter');
            $state.go('home');
        };

        $scope.startTrackingAnalytics = function () {
            window.ga.startTrackerWithId('UA-88009076-1');
        };

    })

;