// Define Login App
var loginApp = angular.module('loginApp', []);

// Configuration Values For loginApp
loginApp.config(function($provide) {

});

// Login Page Controller
loginApp.controller("loginPage", function($scope, $http) {

    $scope.username = 'testUser';
    $scope.password = '123';

    $scope.logoClick = function() {
        window.location = '/';
    };

    // Login Template Values
    $scope.loginButtonClass = 'loginButton';
    $scope.loginButtonText = 'Login';

    // Submit Login Parameters Event
    $scope.loginSubmit = function() {

        // Set Login Button Text
        $scope.loginButtonText = 'Logging In ..';
        $scope.loginErrorMessage = '';

        // Set Login Data For Post Request
        var loginData = {
            'username': $scope.username,
            'password': $scope.password
        };

        // Login Request Internal Success Event For Post Request
        $scope.loginRequestSuccess = function(data, statusCode, responseFunction, requestObject) {
            // If Login Success
            if(data === 'Ok') {
                // Call Login Success Event
                $scope.loginSuccess();
            }
            // If Login Fails
            else {
                // Call Login Error Event
                $scope.loginError();
            }
        };

        // Login Request Internal Error Event For Post Request
        $scope.loginRequestError = function(errorMessage, statusCode, responseFunction, requestObject) {
            // Login Internal Error
            console.log(errorMessage); // Cannot POST /login
            console.log(statusCode); // 404
            console.log(responseFunction()); // response object
            console.log(requestObject); // request object
        };

        // Post Request to "/login"
        $http.post('/login', loginData).success($scope.loginRequestSuccess).error($scope.loginRequestError);

        // Login Success Event
        $scope.loginSuccess = function() {
            // Set Template Values
            $scope.loginButtonText = 'Redirecting ..';
            $scope.loginButtonClass = 'loginButton greenButton';

            // Redirect to Home
            window.location = '/';
        };

        // Login Error Event
        $scope.loginError = function () {
            // Set Template Values
            $scope.loginButtonText = 'Login';
            $scope.loginErrorMessage = 'Wrong Username / Password, Try Again ?';
        };

    };
});