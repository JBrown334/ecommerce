angular.module('ecommerce')
  .service('mainService', function($http)  {

    this.createRequest = function(rfi)  {
      return $http({
        method: 'POST',
        url: 'http://localhost:8888/api/rfi',
        data: rfi
      }).then(function(response){
        return response.data;
      });
    },

    this.createProduct = function(prod)  {
      return $http({
        method: 'POST',
        url: 'http://localhost:8888/api/product',
        data: prod
      }).then(function(response){
        return response.data;
      });
    },

    this.getProduct = function(id)  {
      return $http({
        method: 'GET',
        url: 'http://localhost:8888/api/product/:id'
      });
    },

    this.getProducts = function()  {
      return $http({
        method: 'GET',
        url: 'http://localhost:8888/api/products'
      });
    },

    this.updateProduct = function(id)  {
      return $http({
        method: 'PUT',
        url: 'http://localhost:8888/api/product/:id'
      });
    },

    this.deleteProduct = function(id)  {
      return $http({
        method: 'DELETE',
        url: 'http://localhost:8888/product/:id'
      })
    };


  });
