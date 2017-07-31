angular.module('test')
.factory('testFactory',['$q','$http','$rootScope',function($q,$http,$rootScope){


var obj ={};
	obj.login =function(x){
		var defer = $q.defer();
		$http.post(url)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
return obj;
}])