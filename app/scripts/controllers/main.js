'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('MainCtrl', function ($scope, Todos,  $firebase, fbURL) {
    $scope.todos = Todos;

    $scope.addTodo = function() {
      Todos.$add({text:$scope.todoText, done: false});
      $scope.todoText= '';
    };

    $scope.done = function(id) {
      var itemURL = fbURL  + 'todos/' + id;
      $scope.todo = $firebase(new Firebase(itemURL));

      // change status
      $scope.todo.done = (!$scope.todo.done);
      $scope.todo.$save();
    };
  });
