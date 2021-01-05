import { Button, Modal } from "react-bootstrap";
import React, { Component } from "react";
import { connect } from "react-redux";

export const DeleteUser = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button
              className="m-3"
              style={{
                backgroundColor: "transparent",
                border: "solid",
                color: "#1761a0",
              }}
              onClick={handleClose}
            >
              Close
            </Button>
            <Button
              className="m-3"
              style={{
                backgroundColor: "transparent",
                border: "solid",
                color: "#1761a0",
              }}
              onClick={handleClose}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteUser);
