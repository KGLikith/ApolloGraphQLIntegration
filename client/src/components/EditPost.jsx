import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { TfiSave } from "react-icons/tfi";
import { UPDATE_POST } from "../mutations/postMutation";
import { useMutation } from "@apollo/client";
import { GET_POSTS } from "../queries/postQueries";
import { FaRProject } from "react-icons/fa";

const EditPost = ({ post }) => {
  const [formstatus, setformstatus] = useState(false);
  const [form, setform] = useState({
    title: post.title,
    body: post.body,
  });

  const [updatePost] = useMutation(UPDATE_POST, {
    variables: { title: form.title, body: form.body,id: post.id },
    refetchQueries: [{ query: GET_POSTS, variables: { id: post.id } }],
  });
  
  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = () => {
    updatePost( form.title, form.body,post.id)
    console.log(form);
    setformstatus(false)
  };

  if (!formstatus) {
    return (
      <div className="btn d-flex justify-content-center align-items-center gap-3">
        <button
          className="btn btn-primary d-flex justify-content-center align-items-center gap-3"
          onClick={() => {
            setformstatus(true);
          }}
        >
          <CiEdit size={"25"} />
          Edit Post
        </button>
      </div>
    );
  } else {
    return (
      <>
        <div className="w-75 mx-auto d-flex flex-column align-items-center justify-content-center">
          <h3 className="my-1">Update Project Details</h3>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Title
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              type="text"
              name="title"
              value={form.title}
              onChange={(e) => handleChange(e)}
            />
          </InputGroup>
          <br />
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Body
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              type="text"
              name="body"
              value={form.body}
              onChange={(e) => handleChange(e)}
            />
          </InputGroup>
          <br />
          <button
            className="btn btn-primary d-flex justify-content-center align-items-center gap-3"
            onClick={handleSubmit}
          >
            <TfiSave size={"20"} />
            Save Post
          </button>
        </div>
      </>
    );
  }
};

export default EditPost;
