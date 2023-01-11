const express = require('express');
const app = express();
const connectDB = require('./db');

//DB CONNECTION
connectDB();
//Middleware

const middleware = (req, res, next) => {
  console.log('middleware');
  next();
};

app.get('/', (req, res) => {
  res.send('Hello World');
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

app.listen(3000, () => {
  console.log('running');
});
