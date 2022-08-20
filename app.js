var express = require('express');
var app = express();
app.use(express.static('public'))

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('blogs');
});

// about page
app.get('/blog', function(req, res) {
  res.render('individualBlog');
});



app.listen(8080);
console.log('Server is listening on port 8080');
