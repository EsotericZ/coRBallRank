import { gql } from '@apollo/client';

export const FETCH_PLAYERS = gql`
    query fetchPlayers {
        players {
            _id
            firstName
            lastName
        }
    }
`;