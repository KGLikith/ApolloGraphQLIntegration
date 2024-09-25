import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../queries/postQueries";
import PostCard from "./PostCard";

const Posts = () => {
  const { loading, error, data } = useQuery(GET_POSTS);
  if (loading) return <h1>Loadin..</h1>;
  if (error) return <h1>Error</h1>;
  return (
    <div style={{ display: "flex", gap:"12px", justifyContent:"center" ,flexWrap:"wrap"}}>
      {data?.posts.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </div>
  );
};

export default Posts;
