import { gql } from '@apollo/client';

export const FETCH_LOCATIONS = gql`
    query fetchLocations {
        locations {
        city
        }
    }
`;