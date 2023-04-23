import React, { useRef, useState } from 'react';
import cx from "classnames";
import { func } from "prop-types";
import {
  phoneNumberFormatValidator,
  emailValidator,
  fullNameValidator,
} from "../../shared/validators";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useOutsideClick } from '../../shared/hooks';

import "./styles.css"

const FormPage = ({onSubmit, onPrev, onNext}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({
    name: null,
    email: null,
    phone: null,
  });
  const [isShown, setIsShown] = useState(false);

  const wrapperRef = useRef(null);

  useOutsideClick(wrapperRef, () => {
    setIsShown(false)
  });


  const validate = () => {
    const error = {
      name: (!fullNameValidator(name)) && "A full name must be present",
      phone: (!phoneNumberFormatValidator(phone)) && "A valid phone number is required.",
      email: !emailValidator(email) && "A valid email address is required",
    };
    setErrors(error);
    return !error.name && !error.email && !error.phone;
  };

  const handleSubmit = () => {
    onSubmit({ name, email, phone });
    onNext();
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);


  const inputFields = [
    {
      label: "Full name",
      value: name,
      onChange: handleNameChange,
      error: errors.name,
    },
    {
      label: "Email address",
      value: email,
      onChange: handleEmailChange,
      error: errors.email,
    },
    {
      label: "Phone number",
      value: phone,
      onChange: handlePhoneChange,
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
          className={cx('form-control', { 'is-invalid': field.error })}
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
              <div ref={wrapperRef}>
                  <Modal
                      show={isShown}
                      backdrop="static"
                  >
                      <Modal.Header closeButton>
                        <Modal.Title>Confirm data</Modal.Title>
                      </Modal.Header>

                      <Modal.Body>
                        <p>Do you confirm the sending of the data?</p>
                      </Modal.Body>

                      <Modal.Footer>
                        <Button variant="secondary">Close</Button>
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