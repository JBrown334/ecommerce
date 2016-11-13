//required dependencies
var express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    controller = require('./controller');

//initialize express, and exporting so I can use db in different files
var app = express();

app.use(express.static(__dirname + '/public'));

//middleware
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:8888'
}));

//customer endpoints
app.post('/api/rfi', controller.createRequest);
app.get('/api/product/:id', controller.getProduct);
app.get('/api/products', controller.getProducts);
app.delete('/api/product/:id', controller.deleteProduct);

//admin endpoints
app.post('/api/addproduct', controller.createProduct);
app.put('/api/product', controller.updateProduct);

// controller.getProducts();

//port
app.listen(8888, function(){
  console.log('She\'s a runner on 8888!');
});
