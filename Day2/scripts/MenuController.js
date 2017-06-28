/**
 * Created by Gabriel.Tabus on 6/28/2017.
 */
app.controller('MenuController', ['$scope', function($scope){
    $scope.demoActionList = [
        {
            label: "OtherScope",
            url: "view/childscope.html"
        }
    ];
}
]);