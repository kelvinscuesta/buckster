const express = require('express');
const router = express.Router();
const path = require('path');

// want to serve up a login page when a GET Request comes in to the starting page

router.get('/login', (req, res, next) => {

  // if they have cookies check to see if they match, else
  // serve up a login page
  res.sendFile(path.resolve(__dirname, '../../login/login.html'));
})


module.exports = router;