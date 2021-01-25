import { Button, Form, Col, Modal, Row, Card } from "react-bootstrap";
import React, { useState } from "react";
import { agreement } from "../../categories/Agreement";

export function SelfCreateUser(props) {
  const [show, setShow] = useState(false);

  const [agree, setAgreement] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, password1);
    if (agree) {
      if (username && password && password1) {
        if (password1 === password) {
          console.log("MAKING");
          props.handleSubmit({
            username: username,
            password: password,
          });
          setUsername("");
          setPassword("");
          setPassword1("");
          handleClose();
        }
      }
    } else {
      window.alert("Please agree and enter appropriate information");
    }
  };
  console.log(agree);

  const setAgreementState = () => setAgreement(!agree);
  const setUsernameState = (e) => setUsername(e.target.value);
  const setPasswordState = (e) => setPassword(e.target.value);
  const setPassword1State = (e) => setPassword1(e.target.value);

  const handleClosure = () => {
    setUsername("");
    setPassword("");
    setPassword1("");

    handleClose();
  };

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
        <Modal.Header className="align-self-center">
          <Modal.Title>
            <Card.Img src="../images/Words.png" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form>
            <Card
              style={{
                padding: "1rem",
                height: "300px",
                backgroundColor: "#1760a013",
                overflow: "scroll",
              }}
            >
              {agreement()}{" "}
              <hr />
              <Form.Group>
                <Form.Label>HIPPA Electronic Records Agreement</Form.Label>
                <Form.Check
                  type="checkbox"
                  label="I Agree"
                  onChange={setAgreementState}
                />
              </Form.Group>
            </Card>


            <hr />
            <Row md="3" style={{ overflow: "hidden" }}>
              <Col className="justify-contents-center">
                <Card.Img src="../images/LogoNE.png" style={{ marginLeft: "130px" }} />
              </Col>
              <Col md={{ offset: "2" }}>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control value={username} onChange={setUsernameState} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={setPasswordState}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password1}
                    onChange={setPassword1State}
                  />
                </Form.Group>
                <Row style={{ margin: "0" }} className="justify-content-end">
                  <Button
                    onClick={handleSubmit}
                    type="submit"
                    style={{
                      backgroundColor: "transparent",
                      border: "solid",
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
              border: "solid",
              color: "#1761a0",
            }}
            onClick={handleClosure}
          >
            Back
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
