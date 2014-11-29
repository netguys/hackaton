'use strict';

var _ = require('lodash');
var Universities = require('./universities.model');

// Get list of universitiess
exports.index = function(req, res) {
  Universities.find(function (err, universitiess) {
    if(err) { return handleError(res, err); }
    return res.json(200, universitiess);
  });
};

// Get a single universities
exports.show = function(req, res) {
  Universities.findById(req.params.id, function (err, universities) {
    if(err) { return handleError(res, err); }
    if(!universities) { return res.send(404); }
    return res.json(universities);
  });
};

// Creates a new universities in the DB.
exports.create = function(req, res) {
  Universities.create(req.body, function(err, universities) {
    if(err) { return handleError(res, err); }
    return res.json(201, universities);
  });
};

// Updates an existing universities in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Universities.findById(req.params.id, function (err, universities) {
    if (err) { return handleError(res, err); }
    if(!universities) { return res.send(404); }
    var updated = _.merge(universities, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, universities);
    });
  });
};

// Deletes a universities from the DB.
exports.destroy = function(req, res) {
  Universities.findById(req.params.id, function (err, universities) {
    if(err) { return handleError(res, err); }
    if(!universities) { return res.send(404); }
    universities.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}