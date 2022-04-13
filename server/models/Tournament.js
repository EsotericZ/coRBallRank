const { Schema, model } = require('mongoose');

const tournamentSchema = new Schema({
    name: String,
    clubId: { type: Schema.Types.ObjectId, ref: 'Club' },
    locationId: { type: Schema.Types.ObjectId, ref: 'Location' },
    startDate: String,
    endDate: String,
    weightIndex: Number,
    link: String,
    status: String,
    image: String,
});

module.exports = model('Tournament', tournamentSchema);