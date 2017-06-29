/**
 * Created by Theodor.Toma on 6/28/2017.
 */


hrApp.controller('DescriptionController',['$rootScope','$scope',function($rootScope, $scope) {
    $scope.title = 'Two Way Binding Demo';
    $scope.childtemplate = 'templates/childscope.html';
    $scope.resetFirstVariable = function() {
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function(val) {
        $scope.firstVariable = val;
    };
    $scope.toggleDescriptionShow = function() {
        if ($scope.descriptionShow == false)
            $scope.descriptionShow = true;
        else
            $scope.descriptionShow = false;
    }
}]);
