import React, { useState } from "react";
import uniqid from "uniqid";
import {
  phoneNumberFormatValidator,
  emailValidator,
  fullNameValidator,
} from "../../shared/validators";

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

  const validate = () => {
    const error = {
      name: (!fullNameValidator(name)) && "A full name must be present",
      phone: (!phoneNumberFormatValidator(phone)) && "A valid phone number is required.",
      email: !emailValidator(email) && "A valid email address is required",
    };
    setErrors(error);
    debugger;
    return !error.name && !error.email && !error.phone;
  };

  const handleSubmit = () => {
    if (validate()) {
      onSubmit({ name, email, phone });
      onNext();
    }
  };

  const handleNameChange = event => setName(event.target.value);
  const handleEmailChange = event => setEmail(event.target.value);
  const handlePhoneChange = event => setPhone(event.target.value);


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
    <div className="inputContainer" key={uniqid()}>
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
              <button
                type="button"
                className="btn btn-success my-btn"
                onClick={handleSubmit}
              >
                  Submit
              </button>
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
};

FormPage.defaultProps = {
};

export default FormPage;