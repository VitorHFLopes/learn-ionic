angular.module('appModule')

    .factory('DataStorage', function () {

        var objData = {};

        function _get(key) {
            return objData[key];
        }

        function _set(key, data) {
            objData[key] = data;
        }

        function _remove(key) {
            delete objData[key];
        }

        return {
            get: _get,
            set: _set,
            remove: _remove
        }

    });
