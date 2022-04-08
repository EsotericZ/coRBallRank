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
            playerId {
                fullName
                singleRank
                doubleRank
                mixedRank
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
            }
        }
    }
`;