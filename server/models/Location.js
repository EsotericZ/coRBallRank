const { Schema, model } = require('mongoose');

const locationSchema = new Schema({
    city: String,
});

module.exports = model('Location', locationSchema);