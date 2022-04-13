import { gql } from '@apollo/client';

export const FETCH_EVENTS = gql`
    query Tournaments {
        tournaments {
            name
            clubId {
                name
                address
            }
            locationId {
                city
            }
            startDate
            endDate
            weightIndex
            link
            status
            image
        }
    }
`;