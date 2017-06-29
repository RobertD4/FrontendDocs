/**
 * Created by Theodor.Toma on 6/28/2017.
 */
hrApp.controller('EmployeesController', ['$scope', function($scope) {
    $scope.employees = [
        {
            label: "List Employees",
            url: "views/employeesList.html"
        },
        {
            label: "Demo actions",
            url: "views/shoppingcart.html"
        }
    ];
}]);