app.controller('mainCtrl', function($scope, mainService){

    $scope.createRequest = function(data){
      console.log(data);
      mainService.createRequest(data).then(function(response){
      });
    };

    $scope.getProducts = function(){
      mainService.getProducts().then(function(response){
      $scope.products = response.data;
      });
    };

    $scope.getProducts();





  });
