const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const DB_URI = process.env.DATABASE;
mongoose.set('strictQuery', true);
const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log('connected db');
  } catch (error) {
    console.log('error' + error.message);
  }
};

module.exports = connectDB;
