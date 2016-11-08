//required dependencies
var express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser')
    controller = require('./controller');

//initialize express, and exporting so I can use db in different files
var app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

//endpoints
app.post('/rfi', controller.createRequest);
app.post('/product', controller.createProduct);
app.get('/product/:id', controller.getProduct);
app.get('/products', controller.getProducts);
app.put('/product/:id', controller.updateProduct);
app.delete('/product/:id', controller.deleteProduct);


//port
app.listen(8888, function(){
  console.log('She\'s a runner!');
});
