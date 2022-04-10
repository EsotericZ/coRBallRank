import { gql } from '@apollo/client';

export const ODDS_MATCHES = gql`
    query fetchMatches {
        matches {
            _id
            division
            score
            winningPlayerId {
                _id
                fullName
            }
            losingPlayerId {
                _id
                fullName
            }
            tournamentId {
                name
            }
        }
    }
`;