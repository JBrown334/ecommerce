app.controller('cartCtrl', function($scope, cartService){



$scope.cartQty = cartService.getCart().length;

  $scope.addToCart = function(product)  {
    $scope.cartQty = cartService.addToCart(product).length;
  };

  $scope.removeItem = function(product)  {
    $scope.cartQty = cartService.removeItem(product).length;
  };

  $scope.cart = cartService.getCart();

  $scope.calcTotal = function(cart)  {
    $scope.total = cartService.calcTotal(cart)
  };






});
