const express = require('express');
const app = express();

// console.log(app); // app object

app.get('/', (req, res) => {
  // res.send('Hello world!');
  res.json({ name: 'Carmen', age: 41 });
});

app.get('/names/:name', (req, res) => {
  res.send(`Hello ${req.query.name}`);
});

app.get('/names/:age', (req, res) => {
  res.send(`You are ${req.query.age} years old`);
});

app.get('/names/:lastname', (req, res) => {
  res.send(`Your last name is ${req.query.lastname}`);
});

app.get('/person/:firstname/:lastname', (req, res) => {
  res.send(`Hello ${req.query.name} ${req.query.lastname}!`);
})



app.listen(8000);