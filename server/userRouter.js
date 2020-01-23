const express = require('express');

// to keep the parent routers/apps parems need to instantiate the router with the mergeParams option as true 
const router = express.Router({ mergeParams: true, });
const bucketUser = require('./bucketUser.js');

// want to route everything from /:user to here


// able to post a new user 
router.post('/', (req, res) => {
  console.log(req.params);
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

// able to add a bucket and its name
router.put('/addBucket/:bucketName', (req, res) => {
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

// able to add a bucket item and push it to the array
router.put('/addBucketItem/:bucketName/:bucketItem', (req, res) => {

  console.log('REQ PARAMS', req.params);

  // should have { user, bucketName, bucketItem }

  // want to use bucketUser to find one user, the specific bucketName, and the bucketItem string to push into the array

})

// able to delete a bucket
router.delete('/deleteBucket/:bucketName', (req, res) => {
  const { user, bucketName } = req.params;

  bucketUser.findOneAndUpdate(
    { user: user },
    { $pull: { buckets: { bucketName: bucketName } } }
  )
    .then(data => res.json(data));
});


module.exports = router;