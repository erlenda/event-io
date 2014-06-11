'use strict';
angular.module('ev', ['ngRoute'], function () {
});

angular.module('ev', ['ngRoute', 'ng-bootstrap-datepicker'])
    .config(['$routeProvider', '$locationProvider',
      function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        //$locationProvider.hashPrefix('!');

        $routeProvider
            .when('/', {
              templateUrl: 'views/map.html',
              controller: 'MainCtrl',
              controllerAs: 'map'
            })
            .when('/about', {
              templateUrl: 'views/about.html',
              controller: 'AboutCtrl',
              controllerAs: 'about'
            })
            .when('/contact', {
              templateUrl: 'views/contact.html',
              controller: 'ContactCtrl',
              controllerAs: 'contact'
            })
            .when('/404', {
              templateUrl: 'views/404.html'
            })
            .otherwise( {redirectTo:'/404'});

        // configure html5 to get links working on jsfiddle
      }]);
