angular.module('appModule')

  .controller('HomeCtrl', function ($scope, apiServices) {

    $scope.$on('cloud:push:notification', function(event, data) {
      var msg = data.message;
      console.log(msg);
      alert(msg.title + ': ' + msg.text);
    });

    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4MDA3NTNmNi0wOGEzLTRjMzUtYjg1MC04Zjg1ZTc2MTdiMTQifQ.JNsPbpwTd4divIeEXhD2TNAqfpnxjwuAK4qdcgFrRlo';

    $scope.doPush = function () {
      apiServices.get('https://api.ionic.io/push/tokens', token).success(function (response) {
        console.log(response);
        $scope.response = response;
      }).error(function () {

      })
    }

  })

;
