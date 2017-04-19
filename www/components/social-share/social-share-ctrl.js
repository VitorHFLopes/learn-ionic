angular.module('appModule')

    .controller('SocialShareCtrl', SocialShareCtrl);

function SocialShareCtrl($scope) {

    if (window.plugins) {

        var socialSharingPlugin = window.plugins.socialsharing;
    }

    var sharingOptions = {
        message: "Linha de cima \n Linha de baixo",
        subject: 'Assunto',
        files: ['www/components/social-share/lovely-flower.jpg', 'www/components/social-share/tabela-rodobens.pdf'],
        url: 'www.google.com.br',
        chooserTitle: 'Título alterado' //Only android, override the default share title
    };

    function sharedSuccessfully(result) {
        console.log('result', result);
    }

    function couldNotShare(error) {
        console.error('ERROR', error);
    }

    $scope.share = function () {

        socialSharingPlugin.shareWithOptions(sharingOptions, sharedSuccessfully, couldNotShare);
    };
}