hrApp.service('EmployeeService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findById: function (employeeId) {
                return $http.get(CommonResourcesFactory.findOneEmployeeUrl + employeeId)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                            "id": 100,
                            "firstName": "Steven",
                            "lastName": "King",
                            "email": "SKING",
                            "phoneNumber": "515.123.4567",
                            "hireDate": "1987-06-17",
                            "jobId": 1,
                            "salary": 24000.00,
                            "commissionPct": null,
                            "managerId": null,
                            "departmentId": 90
                        };
                    });
            },
            getDepartmentsList: function () {
                return $http.get(CommonResourcesFactory.findAllDepartmentsUrl)
                    .success(function (data, status, headers, config) {
                        return data;
                    })
                    .error(function (data, status, headers, config) {
                        alert("Error: getDepartmentsList" + status);
                        return "getDepartmentsList ERROR!"
                    });
            },
            getManagersList: function () {
                return $http.get(CommonResourcesFactory.findAllDepartmentsUrl)
                    .success(function (data, status, headers, config) {
                        var returnData;
                        var employee;
                        for(var each in data){
                            if(each.managerId != null){
                                var check = 0;
                                if(returnData == null){
                                    check = 0;
                                }else {
                                    for(var current in returnData){
                                        if(current.employeeId == each.managerId.employeeId)
                                    }
                                }
                            }
                        }

                    })
                    .error(function (data, status, headers, config) {
                        alert("Error: getManagersList" + status);
                        return "getManagersList ERROR!"
                    });
            },
            getJobsList: function () {
                return $http.get(CommonResourcesFactory.findAllDepartmentsUrl)
                    .success(function (data, status, headers, config) {
                        return data;
                    })
                    .error(function (data, status, headers, config) {
                        alert("Error: getJobsList" + status);
                        return "getJobsList ERROR!"
                    });
            }
        }
    }]
);