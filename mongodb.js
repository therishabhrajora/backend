
const mongoclient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'Restro';
const client = new mongoclient(url);

async function dbConnection(collectionName) {
    try {
        await client.connect();
        const db = client.db(dbName);
        return db.collection(collectionName);
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
}

module.exports=dbConnection;