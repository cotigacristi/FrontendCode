/**
 * Created by Gabriel.Tabus on 6/28/2017.
 */
app.controller('OtherController', ['$rootScope', '$scope', function($rootScope, $scope){
    //$scope.title='';
    $scope.setTitle= function(val)
    {
        $scope.title=val;
    }
}]);