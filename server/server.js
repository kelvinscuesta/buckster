const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const loginRouter = require('./Routers/login.js');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up the database connection
const dbURI = 'mongodb+srv://kelv123:kelvin12@cluster0-k94qv.mongodb.net/test?retryWrites=true&w=majority';

// connecting to the DB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;

// event emitter once event happens
db.once('open', () => console.log('CONNECTED TO DATABASE'));

// parse body as json
app.use(bodyParser.json());

// FLOW TEST TO SEE REQUESTS IN TERMINAL
app.use((req, res, next) => {
  console.log(`********* KELVIN FLOW TEST***********
  URL: ${req.url}
  METHOD: ${req.method}
  BODY: ${JSON.stringify(req.body)}\n`);

  return next();
});


// sends a GET request to retreive the bundle.js
app.use('/build', (req, res) => res.sendFile((path.resolve(__dirname, '../build/bundle.js'))));

// working and serves up index.html
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')))

// want to redirect to login page
// app.get('/', (req, res) => res.redirect('/login'));
// // if login succeeds 
// app.get('/login', loginRouter);


// catch all error handler
app.use('*', (req, res) => {
  res.sendStatus(404);
})


// global error handler
app.use((err, req, res, next) => {

  // log the error and send to the client for now, fix later
  console.log(err);
  res.sendStatus(400).send(err);
})

// SERVER RUNNING
app.listen(PORT, () => console.log(`Server listening on port:${PORT}`));