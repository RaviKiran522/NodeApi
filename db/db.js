const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

const connectDb = async () => {
  console.log('called....');
  await mongoose.connect(
    process.env.DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (conn) => {}
  );
  console.log('Db connected');
};

module.exports = connectDb;
