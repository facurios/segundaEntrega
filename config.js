const config = [
    {
    port: "3000",
    database: {
        engine: "mongodb",
        uri: "mongodb://localhost:27017",
        name: "mongodb"
        }
    },
    {
        port: "3000",
        database: {
            engine: "fileSystem",
            uri: "./dataBases/fileSystem",
            name: "fileSystem"
        }
    }

]

let setconfig = config[1]
module.exports = setconfig