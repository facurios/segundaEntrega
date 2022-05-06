const config = require('../../config.json');
const { MongoClient } = require("mongodb");

const cliente = new MongoClient(config.database.uri);

module.exports = cliente;