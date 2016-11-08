var massive = require('massive');
    connectionString = 'postgres://postgres:Golden@ge33@localhost/ecommerce_project',
    massiveInstance = massive.connectSync({connectionString : connectionString});

module.exports = massiveInstance;
