var app = angular.module("myApp", ["ngRoute"]);
app.controller('ctrlHead', function($scope, $http){
    
});

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "chucnang/main.html"
    })
    
});
