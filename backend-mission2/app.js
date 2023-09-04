// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 4000;

// Connect to your local MongoDB database
const dbURI = 'mongodb://127.0.0.1:27017/turnerscarsapi';

//parsing json on route
app.use(express.json());
app.use(cors());

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define your routes and middleware here
// app.js
// ...
const carsRouter = require('./routes/cars');

// Mount the carsRouter under a specific path
app.use('/api', carsRouter);

// ...

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
