import { gql } from '@apollo/client';

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