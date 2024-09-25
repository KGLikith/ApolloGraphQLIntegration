import React from "react";
import Table from "react-bootstrap/Table";

import UserRow from "./UserRow";

const TableComp = ({users}) => {
  return (
    <Table striped bordered hover style={{ marginTop: "25px" }}>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => {
          return <UserRow key={user.id} user={user} />
        })}
      </tbody>
    </Table>
  );
};

export default TableComp;
