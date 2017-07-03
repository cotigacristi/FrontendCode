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
                        var managersIds;
                        var employeeId;
                        for(var each in data){
                            if(data[each].managerId != null){
                                var check = 0;
                                if(managersIds == null){
                                    check = 0;
                                }else {
                                    for(var current = 0; current < managersIds.length; current++){
                                        if(managersIds[current] == data[each].managerId.employeeId){
                                            check = 1;
                                            break;
                                        }
                                    }
                                }
                                if(check == 0){
                                    employeeId = data[each].managerId.employeeId;
                                    returnData.push(employeeId);
                                }
                            }
                        }
                        for(var current in managersIds){
                            for(var each in data){
                                if(managersIds[current] == each.eployeeId){
                                    return data.push(data[each]);
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