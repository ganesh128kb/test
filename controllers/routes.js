angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state('dashboard', {
		url: '/dashboard',
		views: {
			
			'page': {
				templateUrl: 'views/dashboard.html',
				controller: 'dashboardController'
			}
		}
	})

	
	.state('alert', {
		url: '/alert',
		views: {
			
			'page': {
				templateUrl: 'views/alert-dashboard.html',
				controller: 'alertController'
			}
		}
	})
	.state('chart', {
		url: '/chart',
		views: {
			'page': {
				templateUrl: 'views/chart.html',
				controller: 'chartController'
			}
		}
	})
	
	$urlRouterProvider.otherwise('/dashboard')

});