'use strict';

/**
 * @ngdoc overview
 * @name todoAgularRoutesApp
 * @description
 * # todoAgularRoutesApp
 *
 * Main module of the application.
 */
angular
  .module('todoAgularRoutesApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
