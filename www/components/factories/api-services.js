angular.module('appModule')

//Factory for communication with rest
.factory('apiServices', function($http) {

    return{

        get: (function(serviceUrl) {
            return $http({
                url: serviceUrl,
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                }
            });
        }),

        post: (function(serviceUrl, object) {
            return $http({
                url: serviceUrl,
                method: 'POST',
                data: object,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }),

        put: (function(serviceUrl, object) {
            return $http({
                url: serviceUrl,
                method: 'PUT',
                data: object,
                headers: {
                    'Content-Type' : 'application/json'
                }
            });
        }),

        delete: (function(serviceUrl) {
            return $http({
                url: serviceUrl,
                method: 'DELETE'
            });
        })
    };
});
