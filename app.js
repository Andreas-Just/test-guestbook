const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/default.json');

const app = express();

app.use(express.json({ extended: true }));
app.use(require('./routes/routes'));
app.use(express.static('client/build'));

const PORT = process.env.PORT || 5000;

const start = async() => {
  try {
    await mongoose.connect(config.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => console.log(`Server is running on the port: ${PORT}`));
  } catch (err) {
    console.log('Server Error: ', err.message);
    process.exit(1);
  }
};

start();
