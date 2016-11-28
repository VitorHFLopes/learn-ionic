angular.module('appModule')

    .controller('LoginCtrl', function ($scope, $state, DataStorage, GoogleAnalyticsAbstraction) {

        $scope.facebookSignIn = function () {
            GoogleAnalyticsAbstraction.trackEvent('User', 'Facebook login');
            facebookConnectPlugin.login(["public_profile"], function (response) {
                console.log(response);
                $state.go('home');
            });
        };

        $scope.googleSignIn = function () {
            GoogleAnalyticsAbstraction.trackEvent('User', 'Google login');
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
            GoogleAnalyticsAbstraction.trackEvent('User', 'Just enter');
            $state.go('home');
        };

    })

;