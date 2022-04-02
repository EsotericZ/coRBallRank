const jwt = require('jsonwebtoken');
const secret = 'fdbghsAUYDFAUYDGSayudgayudgaddhbayuida';
const expiration = '1h';

module.exports = {
	signToken: function (firstName, _id) {
		const payload = {firstName, _id};
		return jwt.sign({data: payload}, secret, {expiresIn: expiration});
	},
	secret,
}