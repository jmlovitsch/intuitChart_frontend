import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteEmployee } from "../../actions/users";

const DeletePopUp = (props) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  const token = localStorage.getItem("my_app_token");
  return (
    <>
      <Modal
        show={show}
        onHide={(handleClose, props.handleBack)}
        backdrop="static"
        keyboard={false}
      >
        {props.message ? (
          <>
            <Modal.Body>{props.message}</Modal.Body>
            <Modal.Footer>
              <Button
                variant="primary"
                onClick={(handleClose, props.handleBack)}
              >
                Go Back
              </Button>
            </Modal.Footer>
          </>
        ) : (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Just Double Checking...</Modal.Title>
            </Modal.Header>
            <Modal.Body>Delete User? This is permanent.</Modal.Body>
            <Modal.Footer className="justify-content-between">
              <Button
                className="m-3"
                style={{
                  backgroundColor: "transparent",
                  border: "solid",
                  color: "#1761a0",
                }}
                onClick={(handleClose, props.handleBack)}
              >
                Go Back
              </Button>
              <Button
                className="m-3"
                style={{
                  backgroundColor: "transparent",
                  border: "solid",
                  color: "#1761a0",
                }}
                onClick={
                  (handleClose, () => props.deleteEmployee(token, props.itemED))
                }
              >
                Delete
              </Button>

            </Modal.Footer>
          </>
        )}
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  id: state.user.id,
  message: state.employee.message,
});

export default connect(mapStateToProps, { deleteEmployee })(DeletePopUp);
