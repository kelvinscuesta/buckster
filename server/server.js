const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bucketUser = require('./bucketUser.js');
mongoose.set('useFindAndModify', false);

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

// serves up index.html
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')))


// create a new user when hitting this endpoint
// able to initialize a user with empty bucket
// ideally when I click add user, 
// will be able to add a new user to the database
app.post('/:user', (req, res) => {
  const { user } = req.params;

  bucketUser.create({
    user: user,
  })
    .then(data => {
      console.log(data);
      res.send(data);
    })
    .catch(err => console.log(err));
});

// when a user clicks on add bucket
// should be able to put a new bucket 
// to the buckets array
app.put('/:user/addBucket/:bucketName', (req, res) => {
  // get req.params
  console.log('REQ PARAMS', req.params);

  const { user, bucketName } = req.params;

  const bucketToPut = {
    bucketName: bucketName,
    bucketItems: [],
  };

  bucketUser.findOneAndUpdate(
    { user: user },
    { $push: { buckets: bucketToPut } }).then(data => res.json(data))
    .catch(err => res.send(err));

});

// be able to delete a specified bucket from a user
// now able to remove one matching bucket from the bucket name parameter 
app.delete('/:user/deleteBucket/:bucketName', (req, res) => {

  const { user, bucketName } = req.params;

  bucketUser.findOneAndUpdate(
    { user: user },
    { $pull: { buckets: { bucketName: bucketName } } }
  )
    .then(data => res.json(data));
});

// catch all error handler
app.use('*', (req, res) => {
  res.sendStatus(404);
})

// global error handler
app.use((err, req, res, next) => {

  // log the error and send to the client for now, fix later
  console.log(err);
  res.sendStatus(400).send(err);
});

// SERVER RUNNING
app.listen(PORT, () => console.log(`Server listening on port:${PORT}`));