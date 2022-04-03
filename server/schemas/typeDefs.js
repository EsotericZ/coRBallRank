const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        firstName: String
        lastName: String
        username: String
        email: String
        playerId: [Player]
        role: String
        club: String
        location: String
    }

    type Player {
        _id: ID
        playerId: String
        firstName: String
        lastName: String
        birthday: String
        gender: String
        singleRank: Int
        doubleRank: Int
        mixedRank: Int
    }

    type Match {
        _id: ID
        winningPlayerId: [Player]
        winningPointDifferential: Int
        losingPlayerId: [Player]
        losingPointDifferential: Int
        score: String
        tieBreaker: Boolean
        division: String
        status: String
        tournamentId: [Tournament]
        matchType: String
    }

    type Tournament {
        _id: ID
        tournamentId: String
        name: String
        location: String
        club: String
        startDate: String
        endDate: String
        weightIndex: Int
        link: String
        status: String
    }

    type Auth {
        token: String
        user: User
    }

    type Query {
        user(id: String!): User
        users: [User]
        player(id: String!): Player
        players: [Player]
        match(id: String!): Match
        matches: [Match]
        tournament(id: String!): Tournament
        tournaments: [Tournament]
    }

    type Mutation {
        createUser(
            firstName: String!, 
            lastName: String!, 
            username: String!, 
            email: String!, 
            playerId: String, 
            role: String,
            club: String,
            location: String,
            password: String!,
        ): Auth
        createPlayer(
            playerId: String!,
            firstName: String!,
            lastName: String!,
            birthday: String,
            gender: String!,
            singleRank: Int,
            doubleRank: Int,
            mixedRank: Int,
        ): Player
        createMatch(
            matchId: String!,
            winningPlayerId: String!,
            winningPointDifferential: Int!,
            losingPlayerId: String!,
            losingPointDifferential: Int!,
            score: String!,
            tieBreaker: Boolean,
            division: String,
            status: String,
            tournamentId: String!,
            matchType: String!,
        ): Match
        createTournament(
            tournamentId: String!,
            name: String!,
            location: String!,
            club: String!,
            startDate: String!,
            endDate: String!,
            weightIndex: Int!,
            link: String!,
        ): Tournament
        login(
            email: String!, 
            password: String!
        ): Auth
    }
`;

module.exports = typeDefs;