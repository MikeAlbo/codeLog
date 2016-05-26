var codeLogApp = angular.module('codeLogApp', ['ngRoute']);

codeLogApp.config(['$routeProvider', function($routeProvider){
   
    $routeProvider.when('/login', {
        templateUrl: 'views/loginFull.html',
        controller: 'RegistrationCtrl',
    })
    
    .when('/register', {
        templateUrl: 'views/loginFull.html',
        controller: "RegistrationCtrl"
    })
    .when('/index', {
        templateUrl: 'views/main.html',
        controller: "MainCtrl"
    })
    
    .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: "AdminCtrl"
    })
    .when('/write', {
        templateUrl: 'views/write.html',
        controller: "WriteCtrl"
    })
    .when('/read', {
        templateUrl: 'views/read.html',
        controller: "ReadCtrl"
    })
    .otherwise({
        redirectTo: '/index' // change to main 
    });

}]);