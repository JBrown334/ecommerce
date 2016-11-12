angular.module('ecommerce')
  .controller('mainCtrl', function($scope, mainService){

    $scope.createRequest = function($1){
      mainService.createRequest($1).then(function(response){
        alert(response);
      });
    };

    $scope.createProduct = function(prod){
      mainService.creatProduct(prod).then(function(response){
        alert(response);
      });
    };

    $scope.getProduct = function(){
      mainService.getProduct().then(function(response){
      $scope.product = response.data;
      });
    };

    $scope.getProducts = function(){
      mainService.getProducts().then(function(response){
      $scope.products = response.data;
      });
    };

    $scope.getProducts();

    $scope.updateProduct = function(){
      mainService.updateProduct().then(function(response){
      alert(response);
    });
  };

    $scope.deleteProduct = function(){
      mainService.deleteProduct().then(function(response){
      alert(response);
    });
  };

  });
