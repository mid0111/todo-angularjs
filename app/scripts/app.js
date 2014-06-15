'use strict';

/**
 * @ngdoc overview
 * @name todoApp
 * @description
 * # todoApp
 *
 * Main module of the application.
 */
angular
  .module('todoApp', [
    'ngResource',
    'ngRoute',
    'firebase'
  ])
  .value('fbURL', 'https://angularjs-firebase.firebaseio.com/')

  .factory('Todos', function($firebase, fbURL) {
    return $firebase(new Firebase(fbURL + 'todos/'));
  })

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
