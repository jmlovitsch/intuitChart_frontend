import { Button, Form, Col, Modal, Row } from "react-bootstrap";
import React, { useState } from "react";
import { agreement } from "../../categories/Agreement";

export function CreateNewPatientForms(props) {
  const [show, setShow] = useState(true);
    const [agree, setAgreement] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(agree){
       handleClose()
    } else {
        window.alert("Please agree to continue, otherwise go back")
    }

  };

const setAgreementState = () => setAgreement(!agree)

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>New Patient HIPPA Agreement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              {agreement()}
          <Form >
          <Form.Group >
              <Form.Label>HIPPA Electronic Records Agreement</Form.Label>
              <Form.Check type="checkbox" label="I Agree" onChange={setAgreementState} />
            </Form.Group>
            <Row style={{ margin: "0" }} className="justify-content-end">
              <Button
              onClick={handleSubmit}
                type="button"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#1761a0",
                }}
              >
                Click to Continue
              </Button>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
          <Button
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "#1761a0",
            }}
            onClick={() => props.settingState(agree) }
          >
            Back
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
