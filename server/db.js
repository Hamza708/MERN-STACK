const mongoose = require('mongoose');

const DB_URI =
  'mongodb+srv://hamza:qwerty123@cluster0.lxtq6ui.mongodb.net/mernstack?retryWrites=true&w=majority';
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
