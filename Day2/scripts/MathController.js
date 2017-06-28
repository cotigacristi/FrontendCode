/**
 * Created by Gabriel.Tabus on 6/28/2017.
 */
app.controller('MathController', ['$scope', function($scope){
    $scope.title = 'Make America Great Again!'
    $scope.valueA = 0;
    $scope.valueB = 0;
    $scope.addition = function(){
        return +$scope.valueA+$scope.valueB;
    }
    $scope.substraction = function(){
        return +$scope.valueA-$scope.valueB;
    }
    $scope.multiplication = function(){
        return +$scope.valueA*$scope.valueB;
    }
    $scope.division = function(){
        return +$scope.valueA/$scope.valueB;
    }
}]);
