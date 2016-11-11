//required dependencies
var express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser')
    controller = require('./controller');

//initialize express, and exporting so I can use db in different files
var app = express();


app.use(express.static(__dirname + '/public'));
console.log(__dirname);
//middleware
app.use(bodyParser.json());
app.use(cors());

//customer endpoints
app.post('/rfi', controller.createRequest);
app.get('/product/:id', controller.getProduct);
app.get('/products', controller.getProducts);
app.delete('/product/:id', controller.deleteProduct);

//admin endpoints
app.post('/product', controller.createProduct);
app.put('/product/:id', controller.updateProduct);

//port
app.listen(8888, function(){
  console.log('She\'s a runner on 8888!');
});
