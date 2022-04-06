const { Schema, model } = require('mongoose');

const playerSchema = new Schema({
    firstName: String,
    lastName: String,
    birthday: String,
    gender: String,
    singleRank: Number,
    doubleRank: Number,
    mixedRank: Number,
});

module.exports = model('Player', playerSchema);