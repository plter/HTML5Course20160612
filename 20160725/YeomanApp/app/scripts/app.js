'use strict';

/**
 * @ngdoc overview
 * @name yeomanAppApp
 * @description
 * # yeomanAppApp
 *
 * Main module of the application.
 */
angular
  .module('yeomanAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
