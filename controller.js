var db = require('./db');

module.exports = {

  createRequest: function(req, res){
    var rfiParams = [req.body.c_name, req.body.c_email, req.body.c_phone, req.body.rfi_description];
    db.create_request(rfiParams, function(err, rfi){
      console.log(rfi);
      console.log(err);
      res.status(200).send(req.body);
    });
  },

  createProduct: function(req, res){
    var newProd = [req.body.productname, req.body.productprice, req.body.productimage, req.body.productdescription];
    db.create_product(newProd, function(err, product){
      res.status(200).send('Product created!')
    });
  },

  getProduct: function(req, res){
    var params = [req.params.id];
    db.read_product(params, function(err, product){
      res.status(200).send(product);
    });
  },

  getProducts: function(req, res){
    db.read_products(function(err, products){
      res.status(200).send(products);
    });
  },


  updateProduct: function(req, res){
    var updateParams = [req.body.description, req.body.name, req.body.img, req.body.id];
    db.update_product(updateParams, function(err, product){
      console.log(err);
      console.log(product);
      res.status(200).send(req.body);
    });
  },

  deleteProduct: function(req, res){
    var id = [req.params.id];
    db.delete_product(id, function(err, product){
      console.log(err);
      console.log(product);
      res.status(200).send('Product deleted!');
    });
  }

};
