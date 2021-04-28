import gql from "graphql-tag";

export const AUTHENTICATED_USER = gql`
  query AUTH_USER {
    authUserProfile {
      _id
      username
      email
      lastName
      firstName
    }
  }
`;

export const AUTHENTICATE_USER = gql`
  query AUTHENTICATE_USER($username: String!, $password: String!) {
    authenticateUser(username: $username, password: $password) {
      token
      user {
        _id
        username
        email
        lastName
        firstName
      }
    }
  }
`;
