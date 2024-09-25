import { gql } from "@apollo/client";

const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      name
      email
      phone
    }
  }
`;
const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $phone: String!) {
    addUser(name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`;


export { DELETE_USER, ADD_USER };
