import { gql } from '@apollo/client';

export const FETCH_USER = gql`
    query User($userId: String!) {
        user(id: $userId) {
            _id
            firstName
            lastName
            email
            club
            location
            role
            playerId {
                _id
                fullName
                singleRank
                doubleRank
                mixedRank
                avatar
            }
        }
    }
`;

export const FETCH_USERS = gql`
    query fetchUsers {
        users {
            _id
            firstName
            lastName
            email
            playerId {
                firstName
                avatar
            }
        }
    }
`;