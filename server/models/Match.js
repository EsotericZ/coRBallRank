const { Schema, model } = require('mongoose');

const matchSchema = new Schema({
	winningPlayerId: { type: Schema.Types.ObjectId, ref: 'Player' },
    winningPointDifferential: Number,
    losingPlayerId: { type: Schema.Types.ObjectId, ref: 'Player' },
    losingPointDifferential: Number,
    score: String,
    tieBreaker: Boolean,
    tournamentId: { type: Schema.Types.ObjectId, ref: 'Tournament' },
    matchType: String,
});

module.exports = model('Match', matchSchema);