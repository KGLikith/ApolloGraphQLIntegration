import { gql } from "@apollo/client";

const ADD_POST = gql`
  mutation addPost($title: String!, $body: String!, $userId: ID!) {
    addPost(title: $title, body: $body, userId: $userId) {
      id
      title
      body
      user {
        name
        id
        email
        phone
      }
    }
  }
`;

const DELETE_POST = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
      title
      body
      user {
        name
        id
        email
        phone
      }
    }
  }
`;

const UPDATE_POST = gql`
  mutation updatePost($title: String, $body: String, $id: ID!) {
    updatePost(title: $title, body: $body, id: $id) {
      id
      title
      body
      user {
        name
        id
        email
        phone
      }
    }
  }
`;

export { ADD_POST, DELETE_POST, UPDATE_POST };
