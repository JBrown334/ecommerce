var db = require('./db');

module.exports = {

  createRequest: function(req, res){
    var rfiParams = [req.body.firstname, req.body.lastname, req.body.email, req.body.phone, req.body.description];
    db.create_request(rfiParams, res.status(200).send('Your request has been submitted!'));
  },

  createProduct: function(req, res){
    var newProd = [req.body.productname, req.body.productprice, req.body.productimage, req.body.productdescription]
    db.create_product(newProd, res.status(200).send('Product created!'));
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
    var updateParams = [req.param.id, req.param.description, req.param.name, req.param.img];
    db.update_product(updateParams, function(err, product){
      res.status(200).send('Product updated!');
    });
  },

  deleteProduct: function(req, res){
    var id = req.param.id;
    db.delete_product([id], function(err, product){
      res.status(200).send('Product deleted!');
    });
  }

};
