/**
 * Created by Theodor.Toma on 6/28/2017.
 */


hrApp.controller('ImageController', ['$scope', function($scope) {
    $scope.imageList = [
        {
            label: "Eminem",
            url: "../images/eminem.jpg",
            showPrice: false,
            price: "1000",
            index: 0
        },
        {
            label: "Itachi",
            url: "../images/itachi.jpg",
            showPrice: false,
            price: "500",
            index: 1


        },
        {
            label: "Salam",
            url: "../images/salam.jpg",
            showPrice: false,
            price: "10000",
            index: 2


        },
        {
            label: "Ramen",
            url: "../images/ramen.jpg",
            showPrice: false,
            price: "100",
            index: 3

        }
    ];
    $scope.showPrice = function(i) {
        $scope.imageList[i].showPrice = true;
    }

    $scope.notShowPrice = function(i) {
        $scope.imageList[i].showPrice = false;
    }
}]);