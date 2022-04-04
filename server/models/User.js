const { Schema, model } = require('mongoose');

const userSchema = new Schema({
	firstName: String,
	lastName: String,
	username: { type: String, unique: true },
	email: { type: String, unique: true },
	playerId: { type: Schema.Types.ObjectId, ref: 'Player' },
	role: String,
	password: String,
	club: String,
	location: String,
});

module.exports = model('User', userSchema);