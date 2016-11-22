var app = angular.module('app', ['ui.router', 'LocalStorageModule']);

app.config(function($stateProvider, $urlRouterProvider){

    $stateProvider

      .state('home', {
        url: '/',
        templateUrl: '../views/home.html'
      })

      .state('journal', {
        url: '/journal',
        templateUrl: '../views/journal.html'
            })

      .state('rfi', {
        url: '/customrequest',
        templateUrl: '../views/rfi.html'
      })

      .state('product', {
        url: '/product/:id',
        templateUrl: '../views/product.html',
        controller: 'productCtrl'
      })

      .state('contact', {
        url: '/contact',
        templateUrl: '../views/contact.html'
      })

      .state('shop', {
        url: '/shop',
        templateUrl: '../views/shop.html',
        controller: 'cartCtrl'
      })

      .state('admin', {
        url: '/admin',
        templateUrl: '../views/admin.html',
        controller: 'adminCtrl'
      });






    $urlRouterProvider.otherwise('/');



  }).config(function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('app');
  });
