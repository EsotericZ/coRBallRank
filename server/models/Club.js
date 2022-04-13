const { Schema, model } = require('mongoose');

const clubSchema = new Schema({
    name: String,
    address: String,
    locationId: { type: Schema.Types.ObjectId, ref: 'Location' },
});

module.exports = model('Club', clubSchema);