/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Universities = require('./universities.model');

exports.register = function(socket) {
  Universities.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Universities.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('universities:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('universities:remove', doc);
}