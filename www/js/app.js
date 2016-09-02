angular.module('appModule', [
  'ionic',
  'ionic.cloud',
  'ui.router'
])
  .config(function ($ionicCloudProvider) {

    $ionicCloudProvider.init({
      'core': {
        'app_id': '37a94c80'
      },
      'push': {
        'sender_id': '590768645143',
        'pluginConfig': {
          'android': {
            'icon': 'img/icon.png',
            'sound': true
          }
        }
      }
    });

  })

  .run(function($ionicPlatform, $ionicPush) {
    $ionicPlatform.ready(function() {

      //IMPLEMENTACAO ANTIGA
      /*var push = new Ionic.Push({
        "debug": true
      });

      push.register(function(token) {
        console.log("My Device token:",token.token);
        push.saveToken(token);  // persist the token in the Ionic Platform
      });*/

      //NOVA IMPLEMENTACAO
      $ionicPush.register().then(function(t) {
        return $ionicPush.saveToken(t);
      }).then(function(t) {
        console.log('Token saved:', t.token);
      });

    });
  })

;
