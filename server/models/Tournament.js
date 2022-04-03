const { Schema, model } = require('mongoose');

const tournamentSchema = new Schema({
	tournamentId: { type: String, unique: true },
    name: String,
    location: String,
    club: String,
    startDate: Date,
    endDate: Date,
    weightIndex: Number,
    link: String,
});

module.exports = model('Tournament', tournamentSchema);