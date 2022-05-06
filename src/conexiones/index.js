const config = require('../../config.json');
const clienteMongoDB = require('./clienteMongoDB');

let cliente;
(async function() {
    switch (config.database.engine) {
        case 'mongodb':
            cliente = clienteMongoDB;
            await cliente.connect();
            break;
        default:
            cliente = clienteMongoDB;
    }
})();

module.exports = cliente;