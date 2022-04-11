import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation createUser($firstName: String!, $lastName: String!, $username: String!, $email: String!, $playerId: String, $role: String, $club: String, $location: String, $password: String!) {
        createUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, playerId: $playerId, role: $role, club: $club, location: $location, password: $password) {
            token
            user {
                _id
                firstName
                lastName
                username
                email
                playeId
                role
                club
                location
                password
            }
        }
    }
`;