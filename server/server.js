const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const jwt = require('jsonwebtoken');
const utils = require('./utils/auth');
const {resolvers, typeDefs,} = require('./schemas');
const db = require('./config/connection');
const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
	resolvers,
	typeDefs,
	// context: ({req, res}) => {
	// 	const token = req.headers.authorization;

	// 	// if no token no user is logged in
	// 	if (token.length === 0) {
	// 		return req;
	// 	}

	// 	try {
	// 		const {data} = jwt.verify(token, utils.secret);
	// 		req.user = data;
	// 	} catch (e) {
	// 		return {error: 'Invalid token'};
	// 	}

	// 	return {
	// 		req,
	// 	};
	// },
});



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
	app.get("*", (req, res) => {
	  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

db.once('open', async () => {
	await server.start();
	// creates a /graphql endpoint for our server
	server.applyMiddleware({ app });
	app.listen(PORT, () => console.log('Server running on PORT 3001'));
	console.log(`graphql at http://localhost:${PORT}${server.graphqlPath}`)
});