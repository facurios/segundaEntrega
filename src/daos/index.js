const config = require('../../config.json');
const daoProductosMongoDB = require('./productos/ProductosDaoMongoDB');

let daoProductos;
switch (config.database.engine) {
    case 'mongodb':
        daoProductos = daoProductosMongoDB;
        break;
    default:
        daoProductos = daoProductosMongoDB;
}

module.exports = {
    daoProductos,
}