const { Schema, model } = require('mongoose');

const matchSchema = new Schema({
    matchId: { type: String, unique: true },
	winningPlayerId: { type: Schema.Types.ObjectId, ref: 'Player' },
    losingPlayerId: { type: Schema.Types.ObjectId, ref: 'Player' },
    pointDifferential: Number,
    score: String,
    tieBreaker: Boolean,
    division: String,
    status: String,
    tournamentId: { type: Schema.Types.ObjectId, ref: 'Tournament' },
    matchType: String,
});

module.exports = model('Match', matchSchema);