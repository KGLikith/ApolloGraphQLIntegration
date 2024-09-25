import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POST } from "../queries/postQueries";
import { Link } from "react-router-dom";
import UserInfo from "../components/UserInfo";
import DeletePost from "../components/DeletePost";
import EditPost from "../components/EditPost";

const Post = () => {
  const { id } = useParams();
  const { error, loading, data } = useQuery(GET_POST, {
    variables: { id:id },
  });
  if (error) return;
  if (loading) return <h1>Loading..</h1>;
  return <div className="container mx-auto w-50 card p-5 my-5">
    <Link to={'/'} className="btn btn-light btn-sm w-25 d-inline ms-auto py-2">Back</Link>
    
    <h1>{data.post.title}</h1>
    <p>{data.post.body}</p>

    <UserInfo  user={data.post.user}/>
    <div className="mt-5">
      <EditPost post={data.post}/>
      <DeletePost id={data.post.id} />
    </div>
  </div>;
};

export default Post;
