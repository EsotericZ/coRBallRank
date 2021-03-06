import { gql } from '@apollo/client';

export const FETCH_USER = gql`
    query User($userId: String!) {
        user(id: $userId) {
            _id
            firstName
            lastName
            username
            email
            playerId {
                _id
                fullName
                singleRank
                doubleRank
                mixedRank
                avatar
                birthday
                gender
            }
            role
            club
            location
        }
    }
`;

export const FETCH_USERS = gql`
    query fetchUsers {
        users {
            _id
            firstName
            lastName
            username
            email
            playerId {
                fullName
                singleRank
                doubleRank
                mixedRank
                avatar
                birthday
                gender
            }
            role
            club
            location
        }
    }
`;