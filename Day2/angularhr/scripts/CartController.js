/**
 * Created by Theodor.Toma on 6/28/2017.
 */
hrApp.controller('CartController', ['$scope', function($scope) {
   $scope.cartList = []

   $scope.Item = function(nameP, price){
       this.nameP = nameP;
       this.price = price;
   }
   $scope.addToCart = function(nameP, price){
       $scope.cartList.push(new $scope.Item(nameP, price));
       console.log($scope.cartList);
   }

}]);