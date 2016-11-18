app.service('adminService', function($http){

  this.deleteProduct = function(id)  {
    return $http({
      method: 'DELETE',
      url: 'http://localhost:8888/api/product/' + id
    })
  };

  this.createProduct = function(prod)  {
    return $http({
      method: 'POST',
      url: 'http://localhost:8888/api/addproduct',
      data: prod
    }).then(function(response){
      return response.data;
    });
  };

  this.updateProduct = function(id)  {
    return $http({
      method: 'PUT',
      url: 'http://localhost:8888/api/product/' + id
    });
  };


});
