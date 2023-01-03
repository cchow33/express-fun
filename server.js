const express = require('express');
const app = express();

// console.log(app); // app object

app.get('/', (req, res) => {
  // res.send('Hello world!');
  res.json({ name: 'Carmen', age: 41 });
});

app.get('/names/:name', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});


app.listen(8000);