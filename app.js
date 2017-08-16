var express = require('express');
var moviesRouter=require('./routes/moviesRouter');
var mongoose = require('mongoose');
var db = mongoose.connect("mongodb://localhost/MoviesDb");
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.listen(3000,function () {
  console.log("Server is running on port 3000");
});

app.use('/movies', moviesRouter);
