angular.module('test')
.factory('testFactory',['$q','$http','$rootScope',function($q,$http,$rootScope){


var obj ={};

	obj.login =function(id,x){
		var defer = $q.defer();
		$http.post("http://132.140.160.112/test/tst.php")
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.getStudents =function(){
		var defer = $q.defer();
		$http.get($rootScope.serverUrl+"getStudents.php")
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.addStudent =function(x){
		var defer = $q.defer();
		$http.post($rootScope.serverUrl+"addStudent.php",x)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.updateStudents =function(id,x){
		var defer = $q.defer();
		$http.post("http://132.140.160.112/test/tst.php?id="+id+"&y="+x)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.login =function(id,x){
		var defer = $q.defer();
		$http.post("http://132.140.160.112/test/tst.php?id="+id+"&y="+x)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}

return obj;
}])