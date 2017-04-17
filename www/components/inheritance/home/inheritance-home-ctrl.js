angular.module('appModule')

    .controller('InheritanceHomeCtrl', InheritanceHomeCtrl);

function InheritanceHomeCtrl($scope, $state) {

    $scope.goToNextPage = function () {

        $state.go('app.inheritance.next');
    };
}