angular.module('test')
.controller('homeCtrl',function($scope,$rootScope){

    $scope.addTask = function(task){
    $rootScope.tasks.push(task);
    $scope.task = '';
}
$scope.deleteTask = function(x){
   $rootScope.tasks.splice(x,1);
}
})