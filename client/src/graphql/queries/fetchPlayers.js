import { gql } from '@apollo/client';

export const FETCH_SINGLES = gql`
    query fetchPlayers {
        playersSingles {
            _id
            firstName
            lastName
            gender
            singleRank
            birthday
        }
    }
`;