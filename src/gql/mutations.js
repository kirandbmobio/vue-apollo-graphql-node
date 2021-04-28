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
        email: $email
        password: $password
        firstName: $firstName
        lastName: $lastName
      }
    ) {
      token
      user {
        _id
        email
        lastName
        username
      }
    }
  }
`;
