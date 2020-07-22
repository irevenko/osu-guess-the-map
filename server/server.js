const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongodb = require('mongodb');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.DB_URI || 'mongodb://127.0.0.1:27017/osu-map';

app.use(bodyParser.json());
app.use(cors());
app.use(router);
app.use(express.urlencoded({ extended: true }));

async function loadMaps() {
  const client = await mongodb.MongoClient.connect(MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true });
  return client.db('osu-map').collection('maps');
}

router.get('/get_all_maps', async (req, res) => {
  const maps = await loadMaps();
  res.send(await maps.find({}).toArray());
});

router.post('/check', async (req, res) => {

  res.send(await maps.find({}).toArray());
});

router.get('/get_random_map', async (req, res) => {
  const maps = await loadMaps();
  const map = await maps.find({}).toArray();
  const rand = Math.floor((Math.random() * 6) + 0);
  res.send(map[rand]);
});

async function compareImg(image) {
  await mongoose.connect('mongodb://127.0.0.1:27017/osu-map', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const schema = new mongoose.Schema({
    name: String,
    image: String,
  });
  const Map = mongoose.model('Map', schema);
  const mapInDb = await Map.findOne({ image });
  this.img = mapInDb.name;
}

app.listen(PORT, () => console.log(`Server is listening at port: ${PORT}`));
