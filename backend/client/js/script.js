var app = angular.module("myApp", ["ngRoute"]);
app.controller('ctrlMenu', function($scope, $http){
    
});
app.controller('ctrlListUser', function($scope, $http){
    
});
app.controller('ctrlAddUser', function($scope, $http){
    
});
app.controller('ctrlListChauLuc', function($scope, $http){
    
});
app.controller('ctrlAddChauLuc', function($scope, $http){
    
});
app.controller('ctrlListTonGiao', function($scope, $http){
    
});
app.controller('ctrlAddTonGiao', function($scope, $http){
    
});
app.controller('ctrlListLeHoi', function($scope, $http){
    
});
app.controller('ctrlAddLeHoi', function($scope, $http){
    
});
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "chucnang/listUser.html"
    })
    .when("/addUser", {
        templateUrl : "chucnang/addUser.html"
    })
    .when("/listChauLuc", {
        templateUrl : "chucnang/listChauLuc.html"
    })
    .when("/addChauLuc", {
        templateUrl : "chucnang/addChauLuc.html"
    })
    .when("/listTonGiao", {
        templateUrl : "chucnang/listTonGiao.html"
    })
    .when("/addTonGiao", {
        templateUrl : "chucnang/addTonGiao.html"
    })
    .when("/listLeHoi", {
        templateUrl : "chucnang/listLeHoi.html"
    })
    .when("/addLeHoi", {
        templateUrl : "chucnang/addLeHoi.html"
    })
    .when("/user", {
        templateUrl : "chucnang/user.html"
    })
});
