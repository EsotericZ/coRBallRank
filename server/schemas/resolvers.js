const {AuthenticationError} = require('apollo-server-express');
const { Club, Location, Match, Player, User, Tournament } = require('../models');
const utils = require('../utils/auth');

const resolvers = {
	Query: {
		user: async (_root, {id}) => {
			return await User.findById(id).populate({path:"playerId"}).populate({path:"clubId"}).populate({path:"locationId"});
		},
		users: async (_root, _args, context) => {
			return await User.find({}).populate({path:"playerId"}).populate({path:"clubId"}).populate({path:"locationId"});
		},
		locations: async (_root, _args, context) => {
			return await Location.find({});
		},
		clubs: async (_root, _args, context) => {
			return await Club.find({}).populate({path:"locationId"});
		},
		player: async (_root, {id}) => {
			return await Player.findById(id);
		},
		allPlayers: async (_root, _args, context) => {
			return await Player.find({"singleRank": {$ne: 0}}).sort({lastName: 1});
		},
		maleSingles: async (_root, _args, context) => {
			return await Player.find({"gender": "M", "singleRank": {$ne: 0}}).sort({singleRank: -1});
		},
		femaleSingles: async (_root, _args, context) => {
			return await Player.find({"gender": "F", "singleRank": {$ne: 0}}).sort({singleRank: -1});
		},
		maleDoubles: async (_root, _args, context) => {
			return await Player.find({"gender": "M", "doubleRank": {$ne: 0}}).sort({doubleRank: -1});
		},
		femaleDoubles: async (_root, _args, context) => {
			return await Player.find({"gender": "F", "doubleRank": {$ne: 0}}).sort({doubleRank: -1});
		},
		mixedDoubles: async (_root, _args, context) => {
			return await Player.find({"mixedRank": {$ne: 0}}).sort({mixedRank: -1});
		},
		match: async (_root, {id}) => {
			return await Match.findById(id);
		},
		matches: async (_root, _args, context) => {
			return await Match.find({}).populate({path:"winningPlayerId"}).populate({path:"losingPlayerId"}).populate({path:"tournamentId"});
		},
		tournament: async (_root, {id}) => {
			return await Tournament.findById(id).populate({path:"clubId"}).populate({path:"locationId"});
		},
		tournaments: async (_root, _args, context) => {
			return await Tournament.find({}).populate({path:"clubId"}).populate({path:"locationId"});
		},
	},

	Mutation: {
		createUser: async (_root, {firstName, lastName, username, email, role, clubId, locationId, password}) => {
			const user = await User.create({
				firstName,
				lastName,
				username,
				email,
				role,
				clubId, 
				locationId,
				password,
			});

			const token = utils.signToken(user.firstName, user._id);
			console.log(token);
			return {token, user};
		},
		createPlayer: async (_root, {firstName, lastName, birthday, gender, singleRank, doubleRank, mixedRank, avatar}) => {
			const player = await Player.create({
				firstName,
				lastName,
				birthday,
				gender,
				singleRank,
				doubleRank,
				mixedRank,
				avatar,
			});
			console.log('Created Player', player)
		},
		createMatch: async (_root, {winningPlayerId, losingPlayerId, pointDifferential, score, tieBreaker, division, status, tournamentId, matchType}) => {
			const match = await Match.create({
				winningPlayerId,
				losingPlayerId,
				pointDifferential,
				score,
				tieBreaker,
				division,
				status,
				tournamentId,
				matchType,
			});
			console.log('Created Match', match)
		},
		createTournament: async (_root, {name, clubId, locationId, startDate, endDate, weightIndex, link, status}) => {
			const tournament = await Tournament.create({
				name,
				clubId,
				locationId,
				startDate,
				endDate,
				weightIndex,
				link,
				status,
			});
			console.log('Created Tournament', tournament)
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

	Player: { 
		fullName: (root) => {
			return `${root.firstName} ${root.lastName}`;
		}
	}
};

module.exports = resolvers;