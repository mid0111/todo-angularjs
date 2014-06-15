'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('MainCtrl', function ($scope, Todos) {
    Todos.$bind($scope, 'todos');

    $scope.addTodo = function() {
      Todos.$add({text:$scope.todoText, done: false});
      $scope.todoText= '';
    };
  });
