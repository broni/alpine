'use strict';

/**
 * @ngdoc function
 * @name yoAngularTestAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoAngularTestAppApp
 */
angular.module('alpineApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
