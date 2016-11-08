angular.module('ecommerce', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/')

  });
