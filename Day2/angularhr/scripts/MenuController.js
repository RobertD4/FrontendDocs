/**
 * Created by Theodor.Toma on 6/28/2017.
 */

hrApp.controller('MenuController', ['$scope', function($scope) {
    $scope.demoActionList = [
        {
            label: "OtherScope",
            url: "views/childscope.html"
        },
        {
            label: "DemoMath",
            url: "../demomath.html"
        },
        {
            label: "Shopping Cart",
            url: "views/shoppingcart.html"
        }
    ];
}]);