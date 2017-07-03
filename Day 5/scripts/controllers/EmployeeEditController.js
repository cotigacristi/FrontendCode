hrApp.controller('EmployeeEditController', ['$scope', '$http','$routeParams', '$location', 'CommonResourcesFactory',
    function($scope, $http, $routeParams, $location, CommonResourcesFactory) {
        $scope.employee = {};
        $scope.managers=[];
        $scope.jobs=[];
        $scope.departments=[];
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR1

        $http.get(CommonResourcesFactory.findAllDepartmentsUrl)
            .success(function(data, status, headers, config) {
                $scope.departments = data;
            })
            .error (function(data, status, headers, config){
                alert("Error: " + status);
            });

        $http.get(CommonResourcesFactory.findAllJobsUrl)
            .success(function(data, status, headers, config) {
                $scope.jobs = data;
            })
            .error (function(data, status, headers, config){
                alert("Error: " + status);
            });

        $http.get(CommonResourcesFactory.findOneEmployeeUrl + $routeParams.employeeId )
            .success(function(data, status, headers, config) {
                $scope.employee = data;
            })
            .error (function(data, status, headers, config){
                alert("Error: " + status);
            });

        // EmployeeService.findById($routeParams.employeeId)
        //     .then(function (res) {
        //         $scope.employee = res.data;
        //     }, function (err) {
        //         console.log("Error at employees/findOne: " + err);
        //     });


        // EmployeeService.getDepartmentsList().then(function (result) {
        //     $scope.departments = result.data;
        // });

        // EmployeeService.getJobsList().then(function (result) {
        //     $scope.jobs = result.data;
        // });


        $scope.reset = function () {
            this.employee = {};
        }
        // EmployeeService.getManagersList().then(function (result) {
        //     $scope.managers = EmployeeService.getManagersFromEmployeeList(result.data);
        // });

        $http.get(CommonResourcesFactory.findAllEmployeesUrl)
            .success(function (data, status, headers, config) {
                var managerData = [];
                var managersIds = {};
                for (var each in data) {
                    var manager = data[each].managerId;
                    if (manager != null && managersIds[manager.employeeId] === undefined) {
                        managersIds[manager.employeeId] = true;
                        managerData.push(manager);
                    }
                }

                $scope.managers = managerData;
            })
            .error(function (data, status, headers, config) {
                alert("Error: getManagersList" + status);
                return "getManagersList ERROR!"
            });





        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactory.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
    }]);