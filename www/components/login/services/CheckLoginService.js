angular.module('appModule')

    .factory('CheckLoginService', function (ApiServices) {

        var google = ApiServices.get('www.google.com.br');

        return google.then(function () {
            console.log('success');
        }, function () {
            console.log('error');
        });

    })

;