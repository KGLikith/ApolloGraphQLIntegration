import React from "react";
import { useQuery, gql } from "@apollo/client";
import Table from "./Table";
import { GET_USERS } from "../queries/userQueries.js";


const User = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  if(loading) return <h1>Loading..</h1>
  if(error) return <h1>Error</h1>
  return (
    <>
     <Table users={data?.users} />
    </>
  )
};

export default User;
