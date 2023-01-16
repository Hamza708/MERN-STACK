const dotenv = require('dotenv');
const express = require('express');
const app = express();
const connectDB = require('./db');

const PORT = process.env.PORT;
//DB CONNECTION
connectDB();
app.use(express.json());
// const User = require('./model/userSchema');
app.use(require('./router/auth'));

//Middleware

const middleware = (req, res, next) => {
  console.log('middleware');
  next();
};

app.get('/', (req, res) => {
  res.send('Hello Worldd');
});
app.get('/about', middleware, (req, res) => {
  res.send('About ');
});
app.get('/contact', (req, res) => {
  res.send('Contact');
});
app.get('/signin', (req, res) => {
  res.send('Signin');
});
app.get('/signup', (req, res) => {
  res.send('Signup');
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
