'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'myApp.factories'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'MyCtrl1'});
  $routeProvider.when('/create', { templateUrl: 'partials/create.html', controller: 'MyCtrl2' });
  $routeProvider.when('/edit/:id', { templateUrl: 'partials/edit.html', controller: 'MyCtrl3' });
  $routeProvider.when('/details/:id', { templateUrl: 'partials/details.html', controller: 'MyCtrl4' });
  $routeProvider.when('/delete/:id', { templateUrl: 'partials/delete.html', controller: 'MyCtrl5' });
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
