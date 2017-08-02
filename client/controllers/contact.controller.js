angular.module('test')
.controller('contactCtrl',function($scope,$rootScope,testFactory,$state){
 $scope.addStudent = function(x){
   testFactory.addStudent(x)
   .then(function(response){
       alert("success");
       $scope.x='';
       $state.go('home');
   },function(error){
       console.log(error);
       alert("there is some error");
   })
 }
})