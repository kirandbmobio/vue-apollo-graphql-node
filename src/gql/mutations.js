import gql from "graphql-tag";

export const REGISTER_USER = gql`
  mutation REGISTER_USER(
    $username: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $email: String!
  ) {
    registerUser(
      newUser: {
        username: $username
        password: $password
        firstName: $firstName
        lastName: $lastName
        email: $email
      }
    ) {
      token
      user {
        _id
        username
        firstName
        lastName
        email
      }
    }
  }
`;
