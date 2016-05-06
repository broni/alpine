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
    $('.slick-carousel').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 6000
    });
  });
