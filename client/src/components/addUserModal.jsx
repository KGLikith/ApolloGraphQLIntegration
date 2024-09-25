import React from "react";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { ADD_USER } from "../mutations/userMutation";
import { GET_USERS } from "../queries/userQueries";

const addUserModal = () => {
  const [show, setShow] = useState(false);
  const [form, setform] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [error,seterror]=useState("");

  const [addUser] = useMutation(ADD_USER, {
    variables: { name:form.name, email:form.email, phone:form.phone },
    update(cache, { data: { addUser } }) {
      const { users } = cache.readQuery({
        query: GET_USERS,
      });

      cache.writeQuery({
        query: GET_USERS,
        data: { users: users.concat({ addUser }) },
      });
    },
    onError(error){
      console.log(error.message)
      seterror(error.message)
    }
  });


  const handleClose = () => {
    if (form.name === "" || form.email === "" || form.phone === "") {
      return alert("Please fill all the fields");
    }
    console.log(form);
    addUser(form.name, form.email, form.phone);
    setform({
        name: "",
        email: "",
        phone: "",
    });
    setShow(false);
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
      {error!="" &&( <h1>{error}</h1>) }
      <div style={{ textAlign: "center", margin: "20px" }}>
        <Button
          variant="secondary"
          onClick={handleShow}
          style={{ textAlign: "center" }}
        >
          <div className="d-flex align-items-center">
            <FaUser style={{ marginRight: "5px" }} />
            <div>Add User</div>
          </div>
        </Button>
      </div>

      <Modal show={show} onHide={()=>setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Name
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              type="text"
              name="name"
              value={form.name}
              onChange={(e) => handleChange(e)}
            />
          </InputGroup>
          <br />
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Email
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              type="text"
              name="email"
              value={form.email}
              onChange={(e) => handleChange(e)}
            />
          </InputGroup>
          <br />
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Phone
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              type="text"
              name="phone"
              value={form.phone}
              onChange={(e) => handleChange(e)}
            />
          </InputGroup>
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShow(false)}>
            Close
          </Button>
          <Button variant="info" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default addUserModal;
