angular.module('ecommerce', ['ui.router'])

  .config(function($stateProvider, $urlRouterProvider){

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

      .state('shop', {
        url: '/shop',
        templateUrl: '../views/shop.html'
      });






    $urlRouterProvider.otherwise('/');



  });
