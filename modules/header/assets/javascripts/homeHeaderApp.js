// Define Home App
var homeHeaderApp = angular.module('homeHeaderApp', []);

homeHeaderApp.controller("homeHeaderController", function($scope) {

    $scope.logoClick = function() {
        window.location = '/';
    };

});

angular.bootstrap(document.getElementById("homeHeaderApp"), ["homeHeaderApp"]);
