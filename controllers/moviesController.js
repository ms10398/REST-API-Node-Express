var movie = require('./../models/movieModel');

var get = function(req, res) {
  movie.find(function(err, movies) {
    if (err) {
      res.status(500);
      res.send("Internal server error");
    } else {
      res.status(200);
      res.send(movies);
    }
  });
};

var add = function(req, res) {
  var mov = new movie(req.body);
  mov.save(function(err) {
    if (err) {
      res.status(500);
      res.send("Failed");
    } else {
      res.status(201);
      res.send(mov);

    }
  });
};

var getById = function(req, res) {
  movie.findById(req.params.id, function(err, movie) {
    if (err) {
      res.status(404);
      res.send("Not Found");
    } else {
      res.status(200);
      res.send(movie);
    }
  })
};

var update = function(req, res) {
  movie.findById(req.params.id, function(err, movie) {
    if (err) {
      res.status(404);
      res.send("404 Not Found");
    } else {
      movie.title = req.body.title;
      movie.genre = req.body.genre;
      movie.rating = req.body.rating;
      movie.isReleased = req.body.isReleased;

      movie.save(function(err) {
        if (!err) {
          res.status(200);
          res.send(movie);
        } else {
          res.status(500);
          res.send("Failed");
        }
      })
    }
  })
};

var patch = function(req, res) {
  movie.findById(req.params.id, function(err, movie) {
    if (!err) {
      if (req.body._id) {
        delete req.body._id;
        for (var p in req.body) {
          movie[p] = req.body[p];
        }

        movie.save(function(err) {
          if (!err) {
            res.status(200);
            res.send(movie);
          }
        })
      }
    }
  });
};

var del=function (req,res) {
  movie.findById(req.body._id, function (err, movie) {
    movie.remove(function (err) {
      if(!err){
        res.status(204);
        res.send("Removed");
      }
    });
  });
};


module.exports = {
  add: add,
  get: get,
  getById: getById,
  update: update,
  patch: patch,
  del: del
};
