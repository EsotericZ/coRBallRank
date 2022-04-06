const { Schema, model } = require('mongoose');

const tournamentSchema = new Schema({
    name: String,
    location: String,
    club: String,
    startDate: Date,
    endDate: Date,
    weightIndex: Number,
    link: String,
    status: String,
});

module.exports = model('Tournament', tournamentSchema);