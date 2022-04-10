import { gql } from '@apollo/client';

export const FETCH_EVENTS = gql`
    query Tournaments {
        tournaments {
            name
            location
            club
            startDate
            endDate
            link
            status
            image
        }
    }
`;