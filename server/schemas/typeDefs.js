const { gql } = require('apollo-server-express');

// Queries and Mutations
const typeDefs = gql`
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
    }
    type Auth {
        token: String
        user: User
    }
    type Query {
        user(id: String!): User
        users: [User]
    }
    type Mutation {
        createUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;