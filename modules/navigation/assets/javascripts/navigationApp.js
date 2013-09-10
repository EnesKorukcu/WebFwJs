// Define Navigation App
var navigationApp = angular.module('navigationApp', []);

// Navigation Controller
navigationApp.controller("navigationController", function($scope, $http) {

    $scope.exampleLink1Click = function() {
        window.location = '/example_module1';
    };

    $scope.exampleLink2Click = function() {
        window.location = '/example_module2';
    };

});

angular.bootstrap(document.getElementById("navigationApp"), ["navigationApp"]);