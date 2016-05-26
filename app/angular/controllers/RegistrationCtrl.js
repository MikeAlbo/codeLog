codeLogApp.controller('RegistrationCtrl', ['$scope', function($scope){
    
    $scope.message = "controller works";
    
    $scope.signUpSelect = 1; // 0 == sign-up, 1 == register
    
    $scope.navSelect = function(x){ // working but not selecting "sign-up"
        if(x == 0){
            $scope.signUpSelect = 0;
            
            $('#myModal').modal({
               show: true 
            }); 
        } else {
            $scope.signUpSelect = 1;
            $('#myModal').modal({
               show: true 
            }); 
        }
    };
    
}]);