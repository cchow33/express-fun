const express = require('express');
const app = express();

// console.log(app); // app object

app.get('/', (req, res) => {
  // res.send('Hello world!');
  res.json({ name: 'Carmen', age: 41 });
});

// http://localhost:3000/Carmen:
app.get('/names/:name', (req, res) => {
  res.send(`Hello ${req.params.name}`); 
});

// http://localhost:3000/names?name=Carmen:
app.get('/names', (req, res) => {
  res.send(`Hello ${req.query.name}`); 
})

// http://localhost:3000/number/100:
app.get('/number/:age', (req, res) => {
  res.send(`You are ${req.params.age} years old`);
});

// http://localhost:3000/person/Carmen
app.get('/person/:firstname', (req, res) => {
  res.send(`Your name is ${req.params.firstname}`);
});

// http://localhost:3000/person?firstname=Carmen
app.get('/person', (req, res) => {
  res.send(`Your name is ${req.query.firstname}`);
})

// http://localhost:3000/person/Carmen/Chow
app.get('/person/:firstname/:lastname', (req, res) => {
  res.send(`Hello ${req.params.firstname} ${req.params.lastname}!`);
})




app.listen(3000);