hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactory','EmployeeService',
    function($scope, $http, $location, CommonResourcesFactory, EmployeeService) {
        $scope.employee = {};
        $scope.managers=[];
        $scope.jobs=[];
        $scope.departments=[];
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR1

        EmployeeService.getDepartmentsList().then(function (result) {
            $scope.departments = result.data;
        });

        EmployeeService.getJobsList().then(function (result) {
            $scope.jobs = result.data;
        });


        $scope.reset = function () {
            this.employee = {};
        }
        EmployeeService.getManagersList().then(function (result) {
            $scope.managers = EmployeeService.getManagersFromEmployeeList(result.data);
        });



        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactory.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
}]);