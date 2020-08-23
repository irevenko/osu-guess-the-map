const mongodb = require('mongodb');

const MONGO_URI = process.env.DB_URI || 'mongodb://127.0.0.1:27017/osu-map';

async function loadMaps() {
  const client = await mongodb.MongoClient.connect(MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true });
  return client.db('osu-map').collection('maps');
}

module.exports = loadMaps;
