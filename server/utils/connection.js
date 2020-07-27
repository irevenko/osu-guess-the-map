/* eslint-disable no-console */
const mongoose = require('mongoose');


async function makeConnection(app, port) {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/osu-map', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to db!');
    app.listen(port, () => console.log(`Server is listening at port: ${port}`));
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = makeConnection;