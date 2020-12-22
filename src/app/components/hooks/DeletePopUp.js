import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteEmployee } from "../../actions/users";

const DeletePopUp = (props) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
    const token = localStorage.getItem("my_app_token")
  return (
    <>
      <Modal
        show={show}
        onHide={(handleClose, props.handleBack)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Delete User? This is permanent.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(handleClose, ()=>props.deleteEmployee(token, props.itemED) )}>
            Delete
          </Button>
          <Button variant="primary" onClick={(handleClose, props.handleBack)}>
            Go Back
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
    id: state.user.id,
  });

export default connect(mapStateToProps, { deleteEmployee })(DeletePopUp);
