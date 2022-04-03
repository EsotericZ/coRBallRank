const {AuthenticationError} = require('apollo-server-express');
const { Match, Player, User, Tournament } = require('../models');
const utils = require('../utils/auth');

const resolvers = {
	Query: {
		user: async (_root, {id}) => {
			return await User.findById(id);
		},
		users: async (_root, _args, context) => {
			// if (!context.req?.user) {
			// 	throw new AuthenticationError('You must be logged in to do that');
			// }
			return await User.find({});
		},
		player: async (_root, {id}) => {
			return await Player.findById(id);
		},
		players: async (_root, _args, context) => {
			return await Player.find({});
		},
		match: async (_root, {id}) => {
			return await Match.findById(id);
		},
		matches: async (_root, _args, context) => {
			return await Match.find({});
		},
		tournament: async (_root, {id}) => {
			return await Tournament.findById(id);
		},
		tournaments: async (_root, _args, context) => {
			return await Tournament.find({});
		},
	},

	Mutation: {
		createUser: async (_root, {firstName, lastName, username, email, playerId, role, club, location, password}) => {
			const user = await User.create({
				firstName,
				lastName,
				username,
				email,
				playerId,
				role,
				club, 
				location,
				password,
			});

			const token = utils.signToken(user.firstName, user._id);
			console.log(token);
			return {token, user};
		},
		createPlayer: async (_root, {playerId, firstName, lastName, birthday, gender, singleRank, doubleRank, mixedRank}) => {
			const player = await Player.create({
				playerId,
				firstName,
				lastName,
				birthday,
				gender,
				singleRank,
				doubleRank,
				mixedRank,
			});
			console.log('Created Player', player)
		},
		createMatch: async (_root, {winningPlayerId, winningPointDifferential, losingPlayerId, losingPointDifferential, score, tieBreaker, tournamentId, matchType}) => {
			const match = await Match.create({
				winningPlayerId,
				winningPointDifferential,
				losingPlayerId,
				losingPointDifferential,
				score,
				tieBreaker,
				tournamentId,
				matchType,
			});
			console.log('Created Match', match)
		},
		login: async (_root, {email, password}) => {
			const userFound = await User.findOne({email});

			if (!userFound) {
				throw new AuthenticationError('No user found with this email');
			}

			// successfully logged in
			if (userFound.password === password) {
				const token = utils.signToken(userFound.firstName, userFound._id);
				console.log(userFound);
				return {token, userFound};
			}
			throw new AuthenticationError('You must provide correct credentials');
		},
	},
};

module.exports = resolvers;