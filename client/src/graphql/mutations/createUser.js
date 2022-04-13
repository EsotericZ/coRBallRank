import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation createUser($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!, $playerId: String, $role: String, $club: String, $location: String) {
    createUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password, playerId: $playerId, role: $role, club: $club, location: $location) {
      token
      user {
        _id
      }
    }
  }
`;