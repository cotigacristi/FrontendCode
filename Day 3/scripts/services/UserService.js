/**
 * Created by Gabriel.Tabus on 6/29/2017.
 */
hrApp.service('userActionService', function () {
        var myUserList = [];

        return {
            // userStructure: function (firstName, lastName, email, phone, CNP, age) {
            //     this.firstName = firstName;
            //     this.lastName = lastName;
            //     this.email = email;
            //     this.phone = phone;
            //     this.CNP = CNP;
            //     this.age = age;
            // },
            addUserToList: function (item) {
                myUserList.push(item);
            },
            myUserList: myUserList
        }
    }
);