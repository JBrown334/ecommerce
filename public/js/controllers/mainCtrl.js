angular.module('ecommerce')
  .controller('mainCtrl', function($scope, mainService){

    $scope.createRequest = function(rfi){
      mainService.createRequest(rfi).then(function(response){
        alert(response);
      });
    };

    $scope.createProduct = function(prod){
      mainService.creatProduct(prod).then(function(response){
        alert(response);
      });
    };

    $scope.getProduct = mainService.getProduct().then(function(response){
      $scope.product = response.data;
    });

    $scope.getProducts = mainService.getProducts().then(function(response){
      $scope.products = response.data;
    });

    $scope.updateProduct = mainService.updateProduct().then(function(response){
      alert(response);
    });

    $scope.deleteProduct = mainService.deleteProduct().then(function(response){
      alert(response);
    });

  });
