angular.module('appModule')

    .controller('OcrCtrl', function ($scope, $q) {

        var recognizedText;
        var language = 'portuguese';
        var deferred = $q.defer();

        TesseractPlugin.loadLanguage(language, function(response) {
            deferred.resolve(response);
        }, function(reason) {
            deferred.reject('Error on loading OCR file for your language. ' + reason);
        });

        TesseractPlugin.recognizeText(image, language, function (success) {
            $scope.text = recognizedText;

        }, function (error) {

        })

    })

;