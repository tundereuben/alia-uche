const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index.hbs');
});

app.get('/works', (req, res) => {
  res.render('works.hbs');
});

app.get('/bio', (req, res) => {
  res.render('bio.hbs');
});

app.get('/tour', (req, res) => {
  res.render('tour.hbs');
});

app.get('/contact', (req, res) => {
  res.render('contact.hbs');
});

app.get('*', (req, res) => {
  res.render('404.hbs');
});




app.listen(port, () => {
  console.log(`Server is up and running on ${port}...`);
});