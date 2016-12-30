var massive = require('massive');

var connectionString = 'postgres://postgres:12345@localhost/ecommerce_project';
var massiveInstance = massive.connectSync({connectionString : connectionString});

module.exports = massiveInstance;
