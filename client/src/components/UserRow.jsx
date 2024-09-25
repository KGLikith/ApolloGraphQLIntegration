import React from "react";
import Table from "react-bootstrap/Table";
import { DELETE_USER } from "../mutations/userMutation";
import { useMutation } from "@apollo/client";
import { GET_USERS } from "../queries/userQueries";
import { GET_POSTS } from "../queries/postQueries";

const ClientRow = ({ user }) => {
  const [deleteUser] = useMutation(DELETE_USER, {
    variables: { id: user.id },
    refetchQueries: [{query: GET_USERS},{query:GET_POSTS}] 
    // update(cache, { data: { deleteUser } }) {
    //   const { users } = cache.readQuery({
    //     query: GET_USERS,
    //   });
    //   cache.writeQuery({
    //     query: GET_USERS,
    //     data: { users: users.filter((user) => user.id !== deleteUser.id) },
    //   });
    // },
  });
  return (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>
        <button className="btn " onClick={deleteUser}>
          <lord-icon
            src="https://cdn.lordicon.com/skkahier.json"
            trigger="hover"
            style={{ width: "25px", height: "25px" }}
          ></lord-icon>
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
