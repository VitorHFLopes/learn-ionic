angular.module('appModule')

    .controller('HomeCtrl', function ($scope, $state) {

        $scope.goToProject = function goToProject(projectState) {
            $state.go(projectState);
        };

    })

;