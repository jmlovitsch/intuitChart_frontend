import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { connect } from "react-redux";

const Invalid = (props) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    props.clearState();
    setShow(false);
  };
  //   const handleShow = () => setShow(true);
  const token = localStorage.getItem("my_app_token");
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
        style={{color: "#1761a0"}}
      >
          <Modal.Header><strong>Wait...</strong></Modal.Header>
        <Modal.Body className="align-self-center">{props.message}</Modal.Body>
        <Modal.Footer>
          <Button
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "#1761a0",
            }}
            onClick={handleClose}
          >
            Go Back
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Invalid);
