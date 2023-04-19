import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const InputForm = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const firstNameValidation = () => {
    const re = /^[A-Za-z]{2,}\s[A-Za-z]{2,}$/;
    if (re.test(firstName)) {
      return true;
    } else {
      return false;
    }
  };

  const emailValidation = () => {
    const re = /^\S+@\S+\.\S+$/;
    if (re.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  const phoneValidation = () => {
    const re = /^[0-9]{10}$/;
    if (re.test(phone)) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstNameValidation() && emailValidation() && phoneValidation()) {
      alert("Form is valid!");
    } else {
      alert("Form is invalid!");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} controlId="formBasicFirstName">
        <Form.Label
            column sm="3"
            className="text-left"
        >
          First Name
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="text"
            placeholder="Enter first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            isInvalid={!firstNameValidation()}
          />
          <Form.Control.Feedback type="invalid">
            First Name is not valid.
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      <Form.Group
        as={Row}
        controlId="formBasicEmail"
      >
        <Form.Label
            column sm="3"
            className="text-left"
        >
          Email
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isInvalid={!emailValidation()}
          />
          <Form.Control.Feedback type="invalid">
            Email is not valid.
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formBasicPhone">
        <Form.Label column sm="3" className="text-left">
          Phone
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="text"
            placeholder="Enter phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            isInvalid={!phoneValidation()}
          />
          <Form.Control.Feedback type="invalid">
            Phone is not valid.
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Col sm={{ span: 9, offset: 3 }}>
          <Button type="submit" className="mr-2">
            Confirm
          </Button>
          <Button type="reset">Back</Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default InputForm;
