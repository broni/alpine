'use strict';

/**
 * @ngdoc function
 * @name yoAngularTestAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoAngularTestAppApp
 */
angular.module('alpineApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
