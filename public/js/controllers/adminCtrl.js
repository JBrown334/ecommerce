app.controller('adminCtrl', function($scope, $stateParams, adminService){

  $scope.deleteProduct = function(id){
    adminService.deleteProduct(id).then(function(response){
    alert(response.data);
    $scope.getProducts();
  });
};

$scope.createProduct = function(prod){
  adminService.creatProduct(prod).then(function(response){
    alert(response);
  });
};

$scope.updateProduct = function(){
  adminService.updateProduct().then(function(response){
  alert(response);
});
};

});
