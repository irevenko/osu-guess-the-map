const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongodb = require('mongodb');

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.DB_URI || 'mongodb://127.0.0.1:27017/osu-map';

app.use(bodyParser.json());
app.use(cors());
app.use(router);

async function loadMaps() {
  const client = await mongodb.MongoClient.connect(MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true });
  return client.db('osu-map').collection('maps');
}

router.get('/', async (req, res) => {
  const maps = await loadMaps();
  res.send(await maps.find({}).toArray());
});

app.listen(PORT, () => console.log(`Server is listening at port: ${PORT}`));
