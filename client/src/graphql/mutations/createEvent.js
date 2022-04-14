import { gql } from '@apollo/client';

export const CREATE_EVENT = gql`
mutation createTournament($name: String!, $clubId: String!, $locationId: String!, $startDate: String!, $endDate: String, $weightIndex: String, $link: String, $status: String!, $image: String!) {
  createTournament(name: $name, clubId: $clubId, locationId: $locationId, startDate: $startDate, endDate: $endDate, weightIndex: $weightIndex, link: $link, status: $status, image: $image) {
  }
}
`;