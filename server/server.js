const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Map = require('./models/Map');
const Score = require('./models/Score');
require('dotenv').config();

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());
app.use(router);
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public/"));
app.get(/.*/ , function(req,res) {
  res.sendfile(__dirname + "/public/index.html");
});

async function makeConnection(app, PORT) {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to db!');
    app.listen(PORT, () => console.log(`Server is listening at port: ${PORT}`));
  } catch (err) {
    console.error(err.message);
  }
}

makeConnection(app, PORT);

router.get('/api/get/all_maps', async (req, res) => {
  const maps = await Map.find({});
  res.send(maps);
});

router.get('/api/get/all_scores', async (req, res) => {
  const scores = await Score.find({});
  res.send(scores);
});

router.post('/api/post/submit_lb', async (req, res) => { 
  const newScore = new Score({
    user : req.body.userName, 
    points : req.body.points, 
    date : new Date().toLocaleString(),
  });
  await newScore.save();
  res.status(201).send(); 
});
