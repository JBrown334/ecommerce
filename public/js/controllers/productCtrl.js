app.controller('productCtrl', function($scope, $stateParams, productService){

   $scope.getProduct = function(){
     productService.getProduct($stateParams.id).then(function(response){
     $scope.product = response.data[0];
     });
   };

   swal({
  title: "Sweet!",
  text: "Here's a custom image.",
  imageUrl: "images/thumbs-up.jpg"
});

   $scope.getProduct();

 });
