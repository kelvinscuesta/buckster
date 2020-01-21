const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');


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

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')))



// SERVER RUNNING
app.listen(PORT, () => console.log(`Server listening on port:${PORT}`));