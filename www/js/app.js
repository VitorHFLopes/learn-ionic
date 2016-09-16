angular.module('appModule', [
  'ionic',
  'ionic.cloud',
  'ui.router'
])

  .run(function($ionicPlatform) {

    $ionicPlatform.ready(function () {
      var push = new Ionic.Push({
        "debug": true
      });

      push.register(function (token) {
        console.log("My Device token:", token.token);
        push.saveToken(token);  // persist the token in the Ionic Platform
      });//end register

    });//end ready

  })

;
