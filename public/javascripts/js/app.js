angular.module('mainApp',[
	'mainApp.controller',
	'mainApp.directive',
	'mainApp.controllerAbout',
	'mainApp.controllerServices',
	'mainApp.controllerProducts',
	'mainApp.controllerGallery',
	'mainApp.controllerVideos',
	'mainApp.directiveVideos',
	'mainApp.controllerCostumers',
	'mainApp.controllerContact',
	'mainApp.service',
	'ui.router',
	'firebase',
	'ngSanitize'
])
.run(['$rootScope','$state','$stateParams',function($rootScope,$state,$stateParams){
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
	return $rootScope;
}])
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/main');
	$stateProvider.state('main',{
		url:'/main',
		templateUrl:'../views/tpl/main.jade'
	});
	$stateProvider.state('about',{
		url:'/nosotros',
		templateUrl:'../views/tpl/about.jade'
	});
	$stateProvider.state('services',{
		url:'/servicios',
		templateUrl:'../views/tpl/services.jade'
	});
	$stateProvider.state('gallery',{
		url:'/galeria',
		templateUrl:'../views/tpl/gallery.jade'
	});
	$stateProvider.state('videos',{
		url:'/videos',
		templateUrl:'../views/tpl/videos.jade'
	});
	$stateProvider.state('costumers',{
		url:'/clientes',
		templateUrl:'../views/tpl/costumers.jade'
	});
	$stateProvider.state('contact',{
		url:'/contactenos',
		templateUrl:'../views/tpl/contact.jade'
	});
	$stateProvider.state('products',{
		abstract:true,
		url:'/products',
		template:'<ui-view />'
	}).state('products.soldOrb',{
		url:'/soldadura_orbital',
		templateUrl:'../views/tpl/soldOrb.jade'
	}).state('products.cortOrb',{
		url:'/corte_orbital',
		templateUrl:'../views/tpl/cortOrb.jade'
	})
	.state('products.sierOrb',{
		url:'/sierras_copas',
		templateUrl:'../views/tpl/sierOrb.jade'
	})
	.state('products.talOrb',{
		url:'/taladros_magneticos',
		templateUrl:'../views/tpl/talOrb.jade'
	});
})
// ALLOW URLS IN NG-SRC
.config(function($sceDelegateProvider){
	$sceDelegateProvider.resourceUrlWhitelist([
		'self',
		'http://www.youtube.com/**'
	]);
});
