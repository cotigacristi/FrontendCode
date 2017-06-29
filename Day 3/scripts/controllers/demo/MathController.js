hrApp.controller('MathController', ['$scope','MathService', function($scope,MathService){
    $scope.valueA = 0;
    $scope.valueB = 0;
    $scope.op1 = 0;
    $scope.op2 = 0;
    $scope.op3 = 0;
    $scope.op4 = 0;
    $scope.calculate = function() {
//        TODO #8 calculate op1, op2, op3, op4
//         $scope.op1 = +$scope.valueA + $scope.valueB;
//         $scope.op2 = +$scope.valueA - $scope.valueB;
//         $scope.op3 = +$scope.valueA * $scope.valueB;
//         $scope.op4 = +$scope.valueA / $scope.valueB;
//        TODO #13 refactor your calculations using MathService
        $scope.op1 = MathService.add($scope.valueA, $scope.valueB);
        $scope.op2 = MathService.substract($scope.valueA, $scope.valueB);
        $scope.op3 = MathService.multiply($scope.valueA, $scope.valueB);
        $scope.op4 = MathService.divide($scope.valueA, $scope.valueB);
    }

}]);
