const config = require('../../config.json');

let daoProductos;
let daoCarritos;
switch (config.database.engine) {
    case 'mongodb':
        daoProductos = require('./productos/ProductosDaoMongoDB');
        break;
        // case 'sqlLite3':
        //     daoProductos = require('./productos/ProductosDaoSqlLite3');
        //     break;
    default:
        daoProductos = require('./productos/ProductosDaoMongoDB');
}

module.exports = {
    daoProductos,
    daoCarritos
}