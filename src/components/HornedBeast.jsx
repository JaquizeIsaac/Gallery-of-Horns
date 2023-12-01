import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function SelectedBeast(props) {
    const handleClose = () => {
        props.handleClose();
    };

    return (
        <Modal show={props.show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card.Img src={props.image_url} alt="Horned Beast" rounded="true" fluid="true" />
                <Card.Text>{props.description}</Card.Text>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SelectedBeast;