angular.module('test')
.controller('homeCtrl',function($scope,$rootScope,testFactory){


getStudents();
    function getStudents(){
        testFactory.getStudents()
        .then(function(response){
            console.log(response);
            $scope.students = response.data;
            //console.log($scope.students);
        },function(error){
            console.log(error)
        })
    }








    $scope.addTask = function(task){
    $rootScope.tasks.push(task);
    $scope.task = '';
    }
$scope.deleteTask = function(x){
   $rootScope.tasks.splice(x,1);
}
var id = 1;
var x = ['x','y'];

function activate(id,x){
testFactory.login(id,x)
.then(function(res){

},function(err){
    console.log(err);
})
}
})