const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongodb = require('mongodb');

const app = express();

const router = express.Router();
app.use(bodyParser.json());
app.use(cors());
app.use(router);

async function loadRecords() {
  const client = await mongodb.MongoClient.connect('mongodb://127.0.0.1:27017/osu-map', { useNewUrlParser: true });
  return client.db('osu-map').collection('maps');
}

router.get('/', async (req, res) => {
  const maps = await loadRecords();
  res.send(await maps.find({}).toArray());
});

app.listen(4000, () => console.log('Started'));
