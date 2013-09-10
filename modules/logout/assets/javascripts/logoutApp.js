// Define Settings App
var logoutApp = angular.module('logoutApp', []);

// Home Page Controller
logoutApp.controller("logoutController", function($scope, $http) {

    $scope.logoutClick = function() {
        window.location = '/logout';
        $scope.logoutButtonText = 'Logging Out ..';
        $scope.logoutButtonClass = 'logoutButton greyButton';
    };

    $scope.logoutButtonClass = 'logoutButton';
    $scope.logoutButtonText = 'Log out';

});

angular.bootstrap(document.getElementById("logoutApp"), ["logoutApp"]);