// TODO #2 load ngRoute module

var hrApp = angular.module("hrApp", ["ngRoute"]);
hrApp.config(function ($routeProvider) {
    $routeProvider
        .when('/colors', {
            templateUrl: 'views/colors.html',
            controller: 'ColorsController'
        })
        .when('/forms', {
            templateUrl: 'views/form.html',
            controller: 'FormsController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
// TODO #3 add default route for main page
// TODO #4 add #/numbers route and use redirectTo
// TODO #6 add route for mathematical operations
// TODO #9 add route for http request demo page

// TODO #HR1 add routes for Employees List page and Employee View page

