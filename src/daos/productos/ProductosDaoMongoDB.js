const config = require('../../../config.json');
const ContenedorMongoDB = require('../../contenedores/contenedorMongoDb');

class ProductosDaoMongoDB extends ContenedorMongoDB {

    constructor() {
        super();
    }

    async findAll() {
        try {
            await this.client.connect();
            const database = this.client.db(config.database.name);
            const productosCollection = database.collection('productos');
            const cursor = productosCollection.find({});
            return await cursor.toArray();
        } catch (error) {
            console.error("There was an error retrieving all products, " + error);
            return [];
        } finally {
            await this.client.close();
        }
    }
}

module.exports = new ProductosDaoMongoDB();