angular.module('test')
.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('home',{
            url : '/',
            templateUrl : 'views/home.html',
            controller : 'homeCtrl' 
        })
         .state('about',{
            url: '/about',
            templateUrl : 'views/about.html',
            controller : 'aboutCtrl' 
        })
         .state('contact',{
            url: '/contact',
            templateUrl : 'views/contact.html',
            controller : 'contactCtrl' 
        })
         .state('gallery',{
            url: '/gallery',
            templateUrl : 'views/gallery.html',
            controller : 'galleryCtrl' 
        })
        
    $urlRouterProvider.otherwise('/');
})

  .run(['$rootScope',function($rootScope){
		$rootScope.serverUrl = 'http://localhost/';
		

	}]);