import { gql } from '@apollo/client';

export const FETCH_SINGLES = gql`
    query fetchPlayers {
        playersSingles {
            _id
            playerId
            firstName
            lastName
            gender
            singleRank
        }
    }

    # query fetchMatches {
    #     matches {
    #         division
    #     }
    # }

    # query fetchTournaments {
    #     tournaments {
    #         name
    #     }
    # }

    # query fetchUsers {
    #     users {
    #         email
    #     }
    # }
`;

// export const FETCH_PLAYERS = gql`
//     query fetchPlayers {
//         users {
//             firstName
//             lastName
//         }
//     }
// `;


// export const FETCH_PLAYERS = gql`
//     query fetchPlayers {
//         users {
//             _id
//             firstName
//             lastName
//             username
//             playerId {
//                 firstName
//                 lastName
//                 gender
//             }
//         }
//     }
// `;