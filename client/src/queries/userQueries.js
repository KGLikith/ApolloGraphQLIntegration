import { gql } from "@apollo/client";

const GET_USERS = gql`
  query getUsers {
    users {
      id
      name
      email
      phone
    }
  }
`;
const GET_USER = gql`
  query getUser($id:ID!) {
    user(id:$id) {
      name
      id
      email
      phone
    }
  }
`;

export { GET_USERS, GET_USER };
