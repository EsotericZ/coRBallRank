const { Schema, model } = require('mongoose');
const Match = require('./Match');

const playerHistorySchema = new Schema({
	playerId: { type: Schema.Types.ObjectId, ref: 'Player' },
    // matchesWon: { type: Schema.Types.ObjectId, ref: 'Match' },
    // matchesLost: { type: Schema.Types.ObjectId, ref: 'Match' },
    matchesWon: [Match.schema],
    matchesLost: [Match.schema],
});

module.exports = model('PlayerHistory', playerHistorySchema);