var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/style1.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style1.css'));
});

app.get('/ui/script1.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'script1.css'));
});

app.get('/object1.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'object1.html'));
});
app.get('/object4.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'object4.html'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
