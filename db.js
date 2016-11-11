var massive = require('massive');

var connectionString = 'postgres://postgres:Golden@ge33@localhost/ecommerce_project';
var massiveInstance = massive.connectSync({connectionString : connectionString});

module.exports = massiveInstance;
