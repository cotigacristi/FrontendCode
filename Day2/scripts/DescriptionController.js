/**
 * Created by Gabriel.Tabus on 6/28/2017.
 */
app.controller('DescriptionController', ['$rootScope', '$scope', function($rootScope, $scope){
    $scope.title = 'Two Way Biding Demo';
    $scope.childtemplate = 'template/childscope.html';
    $scope.descriptionShow = false;
    $scope.descriptionShow2 = true;

    $scope.toggleDescriptionShow = function(){
        $scope.descriptionShow = !$scope.descriptionShow;
    };
    $scope.toggleDescriptionShow2 = function(){
        $scope.descriptionShow2 = !$scope.descriptionShow2;
    };
}]);
