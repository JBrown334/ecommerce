angular.module('ecommerce', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){

    $stateProvider

      .state('home', {
        url: ('/'),
        templateUrl: '../views/home.html'
      })

      .state('about', {
                url:'/about',
                templateUrl: '../views/about.html'
            });

    //products home
    //selected product
    //about
    //request






    $urlRouterProvider.otherwise('/');



  });
