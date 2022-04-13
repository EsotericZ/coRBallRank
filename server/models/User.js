const { Schema, model } = require('mongoose');

const userSchema = new Schema({
	firstName: String,
	lastName: String,
	username: { type: String, unique: true },
	email: { type: String, unique: true },
	playerId: { type: Schema.Types.ObjectId, ref: 'Player' },
	role: String,
	password: String,
	clubId:  { type: Schema.Types.ObjectId, ref: 'Club' },
	locationId:  { type: Schema.Types.ObjectId, ref: 'Location' },
});

module.exports = model('User', userSchema);