import { gql } from '@apollo/client';

export const FETCH_CLUBS = gql`
    query Clubs {
        clubs {
            name
            address
            locationId {
                city
            }
        }
    }
`;