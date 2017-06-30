
hrApp.controller('FormsController', ['$scope', function ($scope) {
    $scope.title = 'Day 4';
    $scope.description = "Forms stuff!";

    $scope.userType;
    $scope.userAge;
    $scope.firstCrit="";
    $scope.secondCrit="";
    $scope.validDataAlert = function() {
        if($scope.myForm.$valid == true)
            alert("Toate campurile sunt valide");
        else
            alert("Unul/multe campuri nu sunt valide");
    }
}]);

