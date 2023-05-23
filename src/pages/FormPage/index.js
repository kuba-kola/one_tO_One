import React, { useRef, useState } from 'react';
import { func } from "prop-types";
import {
  phoneNumberFormatValidator,
  emailValidator,
  fullNameValidator,
} from "../../shared/validators";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import "./styles.css"

const FormPage = ({ onSubmit, onPrev, onNext }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    name: null,
    email: null,
    phone: null,
  });
  const [isShown, setIsShown] = useState(false);

  const validate = () => {
    const error = {
      name: (!fullNameValidator(form.name)) && "A full name must be present",
      phone: (!phoneNumberFormatValidator(form.phone)) && "A valid phone number is required.",
      email: !emailValidator(form.email) && "A valid email address is required",
    };
    setErrors(error);
    return !error.name && !error.email && !error.phone;
  };

  const handleSubmit = () => {
    onSubmit({ ...form });
    onNext();
  };

  const handleChange = (name, value) => {
    setForm({
      ...form,
      [name]: value
    });
  };


  const inputFields = [
    {
      label: "Full name",
      value: form.name,
      onChange: (e) => handleChange('name', e.target.value),
      error: errors.name,
    },
    {
      label: "Email address",
      value: form.email,
      onChange: (e) => handleChange('email', e.target.value),
      error: errors.email,
    },
    {
      label: "Phone number",
      value: form.phone,
      onChange: (e) => handleChange('phone', e.target.value),
      error: errors.phone,
    },
  ];

  const renderInput = field => (
    <div className="inputContainer" key={field.label}>
      <div className="form-group">
        <label>{field.label}</label>
        <span className="text-danger font-weight-bold">*</span>
      </div>
      <input
        className="form-control"
        type="text"
        value={field.value}
        onChange={field.onChange}
        placeholder={field.label}
      />
      <span className="text-danger inputError">{field.error}</span>
    </div>
  );

  return (
    <form className="form-container">
      <h1>Form</h1>
      {inputFields.map(field => renderInput(field))}
      <div className="btn-container">
        <Button
          type="button"
          className="btn btn-success my-btn"
          onClick={() => {
            if (validate()) {
              setIsShown(true)
            }
          }}
        >
          Submit
        </Button>
        <div>
          <Modal
            show={isShown}
            backdrop="static"
          >
            <Modal.Header>
              <Modal.Title>Confirm data</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Do you confirm the sending of the data?</p>
            </Modal.Body>

            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setIsShown(false)}
              >
                Close
              </Button>
              <Button
                type="button"
                variant="primary"
                onClick={() => handleSubmit()}
              >
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => onPrev()}
        >
          Back
        </button>
      </div>
    </form>
  );
};

FormPage.propTypes = {
  onSubmit: func.isRequired,
  onPrev: func.isRequired,
  onNext: func.isRequired,
};

export default FormPage;