app.service('mainService', function($http)  {

    this.createRequest = function(rfi)  {
      console.log(rfi);
      return $http({
        method: 'POST',
        url: 'http://localhost:8888/api/rfi',
        data: rfi
      });
    };

    this.getProducts = function()  {
      return $http({
        method: 'GET',
        url: 'http://localhost:8888/api/products'
      });
    };

    




  });
