/**
 * Created by Gabriel.Tabus on 6/28/2017.
 */
app.controller('ScopeController', ['$rootScope', '$scope', function($rootScope, $scope){
    $scope.title = 'Two Way Binding Demo';
    $scope.childtemplate = 'templates/childscope.html';
    $scope.firstVariable = "blablabla";
    $scope.resetFirstVariable = function() {
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function(val) {
        $scope.firstVariable = val;
    };
}]);
