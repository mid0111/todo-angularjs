'use strict';

/**
 * @ngdoc function
 * @name todoAgularRoutesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todoAgularRoutesApp
 */
angular.module('todoAgularRoutesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
