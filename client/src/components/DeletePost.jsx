import React from "react";
import { DELETE_POST } from "../mutations/postMutation";
import { useMutation } from "@apollo/client";
import { GET_POSTS } from "../queries/postQueries";
import { Navigate, redirect } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const DeletePost = ({ id }) => {
  const [deletePost] = useMutation(DELETE_POST, {
    variables: { id: id },
    onCompleted: () => {
        console.log("hello");
      return redirect("http://localhost:5173");
    },
    refetchQueries: [{ query: GET_POSTS }],
    // update(cache, { data: { deletePost } }) {
    //   const { posts } = cache.readQuery({
    //     query: GET_POSTS,
    //   });

    //   cache.writeQuery({
    //     query: GET_POSTS,
    //     data: { posts: posts.filter((post) => post.id != deletePost.id) },
    //   });
    // },
  });
  return (
    <div className="d-flex justify-content-center align-items-center gap-3">
        <Link to={'/'} className="btn ">
        <button
        className="btn btn-danger d-flex justify-content-center align-items-center gap-3"
        onClick={() => {
          deletePost(id);
        }}
      >
        <FaTrash />
        Delete Post
      </button>
        </Link>
      
    </div>
  );
};

export default DeletePost;
