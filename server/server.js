const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.DB_URI || 'mongodb://127.0.0.1:27017/osu-map';
const url = 'mongodb://localhost:27017';
const dbName = 'osu-map';

app.use(bodyParser.json());
app.use(cors());
app.use(router);
app.use(express.urlencoded({ extended: true }));

async function loadData(collectionName) {
  const client = await mongodb.MongoClient.connect(MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true });
  return client.db(dbName).collection(collectionName);
}

router.get('/api/get/all_maps', async (req, res) => {
  const maps = await loadData('maps');
  res.send(await maps.find({}).toArray());
});

router.get('/api/get/all_scores', async (req, res) => {
  const scores = await loadData('scores');
  res.send(await scores.find({}).toArray());
});

router.post('/api/post/submit_lb', async (req, res) => { 
  MongoClient.connect(url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    db.collection('scores').insertOne(
      { user : req.body.user, points : req.body.points, date : req.body.date }, 
      () => {
      console.log("Inserted document into the collection");
    });
  });
  
});

app.listen(PORT, () => console.log(`Server is listening at port: ${PORT}`));