app.service('productService', function($http){

    this.getProduct = function(id)  {
      return $http({
        method: 'GET',
        url: 'http://localhost:8888/api/product/' + id
      });
    };

  });
