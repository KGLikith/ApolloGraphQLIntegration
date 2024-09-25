import React from "react";
import { useState } from "react";
import { MdSignpost } from "react-icons/md";
import { useMutation } from "@apollo/client";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { ADD_POST } from "../mutations/postMutation";
import { GET_POSTS } from "../queries/postQueries";

const AddPostModal = () => {
  const [show, setShow] = useState(false);
  const [form, setform] = useState({
    title: "",
    body: "",
    userId: "",
  });
  const [error, seterror] = useState("")

  const [addPost] = useMutation(ADD_POST, {
    variables: { title: form.title, body: form.body, userId: form.userId },
    onError(error){
      console.log(error.message)
      seterror(error.message)
    },
    update(cache, { data: { addPost } }) {
      const { posts } = cache.readQuery({
        query: GET_POSTS,
      });

      cache.writeQuery({
        query: GET_POSTS,
        data: { posts: posts.concat({ addPost }) },
      });
    },
  })

  const handleClose = () => {
    if (form.title === "" || form.body === "" || form.userId === "") {
      return alert("Please fill all the fields");
    }
    console.log(form);
    addPost(form.title, form.body, form.userId);
    setform({
      title: "",
      body: "",
      userId: "",
    });
    setShow(false);
    seterror("")
  };
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {error!="" && <h3 className="text-center mt-1">{error}</h3> }
      <div style={{ textAlign: "center", margin: "20px" }}>
        <Button
          variant="secondary"
          onClick={handleShow}
          style={{ textAlign: "center" }}
          className="btn btn-primary"
        >
          <div className="d-flex align-items-center">
            <MdSignpost style={{ marginRight: "5px" }} />
            <div>Add Post</div>
          </div>
        </Button>
      </div>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              UserId
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              type="text"
              name="userId"
              value={form.userId}
              onChange={(e) => handleChange(e)}
            />
          </InputGroup>
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddPostModal;
