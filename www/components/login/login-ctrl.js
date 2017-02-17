angular.module('appModule')

    .controller('LoginCtrl', function ($ionicAuth, $ionicPopup, $ionicUser, $scope, $state, dataStorage, googleAnalyticsAbstraction) {

        $scope.user = {
            email: '',
            password: ''
        };

        $scope.facebookSignIn = function () {
            //googleAnalyticsAbstraction.trackEvent('User', 'Facebook login');
            facebookConnectPlugin.login(["public_profile"], function (response) {
                console.log(response);
                $state.go('home');
            });
        };

        $scope.googleSignIn = function () {
            //googleAnalyticsAbstraction.trackEvent('User', 'Google login');
            window.plugins.googleplus.login({
            }, function (response) { //SUCCESS
                console.log(response);
                dataStorage.set('googlePlusBasicData', response);
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
            //googleAnalyticsAbstraction.trackEvent('User', 'Just enter');
            $state.go('home');
        };

    })

;