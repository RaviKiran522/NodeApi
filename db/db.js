const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

const connectDb = async () => {
  const DB_URL = 'mongodb+srv://nodeapi:nodeapi@cluster0.bzfc4.mongodb.net/?retryWrites=true&w=majority/';
  console.log('called....');
  await mongoose.connect(
    DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (conn) => {}
  );
  console.log('Db connected');
};

module.exports = connectDb;
