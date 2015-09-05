var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'googlechart']);


app.controller('mainCtrl', ['$scope', '$http', '$location', '$window',
                                function($scope, $http, $location, $window) {
      $scope.calc;
                                }]);