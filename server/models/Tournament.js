const { Schema, model } = require('mongoose');

const tournamentSchema = new Schema({
    name: String,
    location: String,
    club: String,
    startDate: String,
    endDate: String,
    weightIndex: Number,
    link: String,
    status: String,
    image: String,
});

module.exports = model('Tournament', tournamentSchema);