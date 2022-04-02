const {AuthenticationError} = require('apollo-server-express');
const { User} = require('../models');
const utils = require('../utils/auth');

const resolvers = {
	Query: {
		user: async (_root, {id}) => {
			return await User.findById(id);
		},
		users: async (_root, _args, context) => {
			if (!context.req?.user) {
				throw new AuthenticationError('You must be logged in to do that');
			}
			console.log(context.coolestGuyInTheWorld);
			console.log(context.someNerd);
			return await User.find({});
		},
	},

	Mutation: {
		createUser: async (_root, {firstName, lastName, email, password}) => {
			console.log('im hit!!!');
			const user = await User.create({
				firstName,
				lastName,
				email,
				password,
			});

			const token = utils.signToken(user.firstName, user._id);
			console.log(token);
			return {token, user};
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
	// Field Resolvers
	// Basically things we defined in typeDefs
	// that isn't in the database
	// but we want extra shit, we can use field resolvers
	// User: {
	// 	fullName: (root) => {
	// 		console.log('I AM ROOT',root);
	// 		return `${root.firstName} ${root.lastName}`;
	// 	},
		// nameLength: (root) => {
		// 	return root.firstName.length;
		// },
	// },
};

module.exports = resolvers;