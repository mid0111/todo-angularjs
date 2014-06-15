'use strict';

/**
 * @ngdoc function
 * @name todoAgularRoutesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoAgularRoutesApp
 */
angular.module('todoAgularRoutesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
