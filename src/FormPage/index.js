import React, { useState } from "react";
import { func } from "prop-types";

import {
  phoneNumberFormatValidator,
  emailValidator,
  fullNameValidator,
} from "../shared/validators";

import "./styles.css"


const FormInputs = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [errors, setErrors] = useState({
      name: null,
      email: null,
      phone: null,
    });
  
    const validate = () => {
      const phoneNumberFormatValid = phoneNumberFormatValidator(phone);
      const error = {
        name: (!fullNameValidator(name)) && "A full name must be present",
        phone: (!phoneNumberFormatValid) && "A valid phone number is required.",
        email: !emailValidator(email) && "A valid email address is required",
      };
      setErrors(error);
      return !error.name && !error.email && !error.phone;
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (validate()) {
        onSubmit({
          name,
          email,
          phone,
        });
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
        <div className="inputContainer">
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
        <form className="form-container" onSubmit={handleSubmit}>
            <h1>Form</h1>
            {inputFields.map(field => renderInput(field))}
            <div className="btn-container">
                <button
                    type="submit"
                    className="btn btn-success my-btn"
                >
                    Submit
                </button>
                <button
                    type="submit"
                    className="btn btn-warning"
                >
                    Back
                </button>
            </div>
        </form>
    );
  };
  
  FormInputs.propTypes = {
    onSubmit: func.isRequired,
  };
  
  FormInputs.defaultProps = {
  };
  
export default FormInputs;
