angular.module('appModule')

    .factory('LocalStorage', function ($localStorage) {

        var _get = function getLocalStorage(key) {
            return $localStorage[key];
        };

        var _set = function setLocalStorage(key, value) {
            var obj = {};
            obj[key] = value;
            $localStorage.$default(obj);
        };

        var _remove = function removeLocalStorage(key) {
            delete $localStorage[key];
        };

        return {
            get: _get,
            set: _set,
            remove: _remove
        };

    })

;