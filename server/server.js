const express = require('express');
const app = express();
const PORT = 3000;


// FLOW TEST TO SEE REQUESTS IN TERMINAL
app.use((req, res, next) => {
  console.log(`********* KELVIN FLOW TEST***********
  URL: ${req.url}
  METHOD: ${req.method}
  BODY: ${JSON.stringify(req.body)}\n`);

  return next();
});


app.get('/', (req, res) => res.send('Hello World'));



// SERVER RUNNING
app.listen(PORT, () => console.log(`Server listening on port:${PORT}`));