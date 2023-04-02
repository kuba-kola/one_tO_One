import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useOutsideClick } from '../shared/hooks';

const ModalWindpw = () =>  {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, () => {
    setShow(false)
  });
    
  console.log(<Modal/>);

    return (
        <>
            <Button
            variant="warning"
            onClick={handleShow}
            >
            Open modal
            </Button>
            <div ref={wrapperRef}>
                <Modal
        
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                    <Modal.Title>Testing OutClick</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Just click outside to see that it works, and if you don't want to, don't click, who am I to tell you anything?
                    </Modal.Body>
                </Modal>
            </div>
</>
);
}

export default ModalWindpw;