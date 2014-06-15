'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [{
      done: true,
      text: "Create template"
    }, {
      done: false,
      text: "Implement the adding button"
    }, {
      done: false,
      text: "Implement to archive the closed tasks"
    }, {
      done: false,
      text: "Bind the database"
    }, {
      done: false,
      text: "Modify site design"
    }];

    $scope.addTodo = function() {
      $scope.todos.push({text:$scope.todoText, done: false});
      $scope.todoText= '';
    };

  });
