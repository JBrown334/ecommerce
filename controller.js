var app = require('./db');

module.exports = {

  createRequest: function(req, res){
    var firstName = req.body.c_firstname;
    var lastName = req.body.c_lastname;
    var email = req.body.c_email;
    var phone = req.body.c_phone;
    var rfi = req.body.rfi_description;
    db.create_request([firstName, lastName, email, phone, rfi], res.status(200).send('Your request has been submitted!'));
  },

  createProduct: function(req, res){
    var name = req.body.productname;
    var price = req.body.productprice;
    var image = req.body.productimage;
    var desc = req.body.productdescription;
    db.create_product([name, price, image, desc], res.status(200).send('Product created!'));
  },

  getProduct: function(req, res){
    var id = req.query.productid;
    db.read_product([id], function(err, product){
      res.status(200).send(product);
    });
  },

  getProducts: function(req, res){
    db.read_products(function(err, products){
      res.status(200).send(products);
    });
  },

  updateProduct: function(req, res){
    var id = req.query.productid;
    var description = req.query.productdescription;
    var name = req.query.productname;
    var img = req.query.productimage;
    db.update_product([id, description, name, img], function(err, product){
      res.status(200).send('Product updated!');
    });
  },

  deleteProduct: function(req, res){
    var id = req.query.id;
    db.delete_product([id], function(err, product){
      res.status(200).send('Product deleted!');
    });
  }

};
