app.controller('productCtrl', function($scope, $stateParams, productService){

   $scope.getProduct = function(){
     productService.getProduct($stateParams.id).then(function(response){
     $scope.product = response.data[0];
     });
   };

   $scope.getProduct();

 });
