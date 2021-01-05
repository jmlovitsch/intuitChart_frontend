import { Button, Form, Col, Modal, Row, Card } from "react-bootstrap";
import React, { useState } from "react";
import { agreement } from "../../categories/Agreement";
import LogoNE from "/Users/johnlovitsch/Desktop/mod5 project/IntuitChart/intuit_chart_frontend/src/LogoNE.png";
import Words from "/Users/johnlovitsch/Desktop/mod5 project/IntuitChart/intuit_chart_frontend/src/Words.png"


export function SelfCreateUser(props) {
  const [show, setShow] = useState(false);
  const [agree, setAgreement] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (agree) {
      if (e.target[0].value && e.target[1].value && e.target[2].value) {
        if (e.target[1].value === e.target[2].value) {
          console.log("MAKING");
          props.handleSubmit({
            username: e.target[0].value,
            password: e.target[1].value,
          });
        }
      }
    } else {
      window.alert("Please agree and enter appropriate information");
    }
  };
  console.log(agree);

  const setAgreementState = () => setAgreement(!agree);

  return (
    <>
      <Button
        style={{
          backgroundColor: "transparent",
          border: "none",
          color: "#1761a0",
        }}
        onClick={handleShow}
      >
        Create User
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
        size="lg"

      >
        <Modal.Header  className="align-self-center">
        <Modal.Title ><Card.Img src={Words} /></Modal.Title>
        </Modal.Header>
        <Modal.Title className="align-self-center">
          {" "}
          New Patient HIPPA Agreement
        </Modal.Title>
        <Modal.Body>
          <Card style={{padding: "1rem", backgroundColor: "#1760a013" }}>{agreement()}</Card>
          <Form onSubmit={handleSubmit}>
            <hr />
            <Form.Group>
              <Form.Label>HIPPA Electronic Records Agreement</Form.Label>
              <Form.Check
                type="checkbox"
                label="I Agree"
                onChange={setAgreementState}
              />
            </Form.Group>
            <hr />
            <Row md="3" style={{ overflow: "hidden" }}>
              <Card.Img src={LogoNE} />
              <Col md={{ offset: "2" }}>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
                <Row style={{ margin: "0" }} className="justify-content-end">
                  <Button
                    type="submit"
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "#1761a0",
                    }}
                  >
                    Create
                  </Button>
                </Row>
              </Col>
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
            onClick={handleClose}
          >
            Back
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
