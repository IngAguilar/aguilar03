const express = require('express');

const app = express();

app.get('/', (req, res) => {
  //res.send('Hello new World 2');
  res.send('Hello World 3');
})

module.exports = app;
