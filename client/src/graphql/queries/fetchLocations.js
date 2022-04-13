import { gql } from '@apollo/client';

export const FETCH_LOCATIONS = gql`
    query Locations {
        locations {
            city
        }
    }
`;