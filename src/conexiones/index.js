const config = require('../../config.json');

let cliente;
(async function() {
    switch (config.database.engine) {
        case 'mongodb':
            cliente = require('./clienteMongoDB');
            await cliente.connect();
            break;
            // case 'sqllite3':
            //     cliente = require('./clienteSQLLite3');
            //     await cliente.connect();
            //     break;
        default:
            cliente = clienteMongoDB;
    }
})();

module.exports = cliente;