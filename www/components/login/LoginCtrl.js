angular.module('appModule')

    .controller('LoginCtrl', function ($ionicAuth, $ionicPopup, $ionicUser, $scope, $state, DataStorage, GoogleAnalyticsAbstraction) {

        $scope.user = {
            email: '',
            password: ''
        };

        $scope.facebookSignIn = function () {
            //GoogleAnalyticsAbstraction.trackEvent('User', 'Facebook login');
            facebookConnectPlugin.login(["public_profile"], function (response) {
                console.log(response);
                $state.go('home');
            });
        };

        $scope.googleSignIn = function () {
            //GoogleAnalyticsAbstraction.trackEvent('User', 'Google login');
            window.plugins.googleplus.login({
            }, function (response) { //SUCCESS
                console.log(response);
                DataStorage.set('googlePlusBasicData', response);
                $state.go('home');
            }, function (errorStatus) { //ERROR
                console.error(errorStatus);
            });
        };

        $scope.ionicSignUp = function (user) {

            $ionicAuth.signup(user).then(function () {
                $ionicAuth.login('basic', user).then(function () {
                    $state.go('home');
                });
            }, function (errors) {
                errors = errors.details;
                for (var i = 0; i < errors.length; i++) {
                    if (errors[i] === 'conflict_email') {
                        $ionicAuth.login('basic', user).then(function () {
                            $state.go('home');
                        });
                    } else {
                        alert(errors[i]);
                    }
                }
            })
        };

        $scope.goHome = function () {
            //GoogleAnalyticsAbstraction.trackEvent('User', 'Just enter');
            $state.go('home');
        };

    })

;