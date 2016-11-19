app.service('cartService', function(){

  var cart = [];

  this.addToCart = function(product)  {
    cart.push(product);
    return cart;
  };

  this.removeItem = function(product)  {
    cart.splice(product, 1);
    return cart;
  };

  this.calcTotal = function(cart)  {
    var total = 0;
    for(var i = 0; i < cart.length; i++)  {
      total += getCart().length * product.productprice;
    };
    console.log(total);
    return total;
  };

  this.getCart = function()  {
    return cart;
  };

});
