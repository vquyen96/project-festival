var app = angular.module("myApp", ["ngRoute"]);
app.controller('ctrlRegister', function($scope, $http){
	$scope.btnSbm = function(){
        alert(1);
		console.log($scope.data);
		$http({
            method : "POST",
            url : "http://localhost:3000/api/users",
            data: $scope.data
        }).then(function mySuccess(response) {
            console.log(response);
            window.location.href = "login.html";
        }, function myError(response) {
            console.log(response.statusText);
        });
	}
    
});