const { MongoClient } = require("mongodb");
const config = require('../../config.json');

class ContenedorMongoDB {
    constructor() {
        this.client = new MongoClient(config.database.uri);
    }
}

module.exports = ContenedorMongoDB;