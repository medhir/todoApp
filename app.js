var app = angular.module('todoApp', []);

app.controller('TodoController', ['$scope', 'TodoFactory', function($scope, TodoFactory) {
    $scope.newItem = '';
    $scope.todos = TodoFactory;
    
    $scope.removeItem = function(index) {
      $scope.todos.splice(index, 1);
    }
    
    $scope.addItem = function() {
      $scope.todos.push($scope.newItem);
      $scope.newItem = '';
    }
}]);

app.controller('OtherController', function($scope, TodoFactory) {
  $scope.todos = TodoFactory;
})

app.factory('TodoFactory', [function() {
  var todos =  ['Go get milk', 'Exercise', 'Do assignment 2'];
  return todos;
}]);