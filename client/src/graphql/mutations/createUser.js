import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation createUser($firstName: String!, $lastName: String!, $username: String!, $email: String!, $role: String, $club: String, $location: String, $password: String!) {
  createUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, role: $role, club: $club, location: $location, password: $password) {
    token
  }
}
`;