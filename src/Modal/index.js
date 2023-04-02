import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useOutsideClick } from '../shared/hooks';

const ModalWindow = () =>  {
    const [isShown, setIsShown] = useState(false);

    const handleShow = () => setIsShown(true);

    const wrapperRef = useRef(null);

    useOutsideClick(wrapperRef, () => {
        setIsShown(false)
    });

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
                    show={isShown}
                    backdrop="static"
                >
                    <Modal.Header>
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

export default ModalWindow;