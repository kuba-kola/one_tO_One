import React, { useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { useOutsideClick } from '../../shared/hooks';
import useStore  from '../../hooks/useStore';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import "./styles.css"

const FormPage = observer(() => {
  const [ orderStore ] = useStore('order')
  const [isShown, setIsShown] = useState(false);

  const wrapperRef = useRef(null);

  useOutsideClick(wrapperRef, () => {
    setIsShown(false)
  });

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
        onChange={(e) => orderStore.handle(field.name, e.target.value)}
        placeholder={field.label}
      />
      {!field.valid && (
        <span className="text-danger inputError">
        {`${field.label} must be present`}
        </span>
      )}
    </div>
  );

  return (
    <form className="form-container">
      <h1>Form</h1>
      {orderStore.form.map(field => renderInput(field))}
      <div className="btn-container">
        <Button
          type="button"
          className="btn btn-success my-btn"
          onClick={() => {
            if (orderStore.validation) {
              setIsShown(true)
            }
          }}
        >
          Submit
        </Button>
        <Link
          className="btn btn-warning"
          to="/">
          Back
        </Link>
      </div>
      {isShown && (
        <Modal
          show
          backdrop="static"
        >
          <div ref={wrapperRef}>
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
              <Link
                className="btn btn-primary"
                to="/result">
                Submit
              </Link>
            </Modal.Footer>
          </div>
        </Modal>
      )}
    </form>
  );
});

FormPage.propTypes = {};

export default FormPage;
