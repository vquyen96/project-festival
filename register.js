var app = angular.module("myApp", ["ngRoute"]);
app.controller('ctrlRegister', function($scope, $http){
    angular.element(document).ready(function () {
        setTimeout(function(){
            $(".detailLoad").fadeOut("slow");
        },500);
        
    });
	$scope.btnSbm = function(){
        var day = $scope.data.birthday.getTime();
        var today = new Date();
        today=today.getTime();
        if(today>day){
            $http({
                method : "POST",
                url : "http://localhost:3000/api/users",
                data: $scope.data
            }).then(function mySuccess(response) {
                alert("Thêm Tài khoản thành công");
                console.log(response);
                window.location.href = "login.html";
            }, function myError(response) {
                alert(response.data);
            });
        }
        else{
            alert("Bạn không được chọn ngày tương lai !");
        }
		console.log($scope.data);
		
	}
    
    
});
