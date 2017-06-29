hrApp.controller('UserController', ['$scope','$location','userActionService', function($scope, $location, userActionService) {
    $scope.title = 'HR Application';
    $scope.description = "User application";
    $scope.showList = false;

    $scope.userList = userActionService.myUserList;

    $scope.firstNameVar = "";
    $scope.lastNameVar = "";
    $scope.emailVar = "";
    $scope.phoneNumberVar = "";
    $scope.CNPVar = "";
    $scope.ageVar = 0;

    $scope.back = function() {
        $location.url('/');
    }

    $scope.resetFields = function() {
        $scope.firstNameVar = "";
        $scope.lastNameVar = "";
        $scope.emailVar = "";
        $scope.phoneNumberVar = "";
        $scope.CNPVar = "";
        $scope.ageVar = 0;
    }

    $scope.saveUser = function() {
        var userItem = {
            firstName: $scope.firstNameVar,
            lastName: $scope.lastNameVar,
            email: $scope.emailVar ,
            phone: $scope.phoneNumberVar,
            CNP: $scope.CNPVar,
            age: $scope.ageVar
        }
        userActionService.addUserToList(userItem);
        alert("S-a adaugat cu suces o intrare in lista!");
    }

    $scope.toggleDescriptionShow = function() {
        $scope.showList = !$scope.showList;
    };
}]);
