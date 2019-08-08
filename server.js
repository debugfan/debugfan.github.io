const express = require('express');

const app = express();

app.use('/', express.static(__dirname))

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Serving on http://localhost:3000/');
});
