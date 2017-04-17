angular.module('appModule')

    .controller('InheritanceNextCtrl', InheritanceHomeCtrl);

function InheritanceHomeCtrl($scope) {

    $scope.nextText = 'ESTA É A PRÓXIMA PÁGINA';
}