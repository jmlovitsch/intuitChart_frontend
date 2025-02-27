import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { connect } from "react-redux";
import { handleBackfromAddPatient }  from "/Users/johnlovitsch/Desktop/mod5 project/IntuitChart/intuit_chart_frontend/src/app/actions/patients.js"


const AddPatient = (props) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
    const token = localStorage.getItem("my_app_token")


  return (
    <>
      <Modal
        show={show}
        onHide={(handleClose, props.handleBackfromAddPatient)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>
            Delete
          </Button>
          <Button variant="primary" onClick={(handleClose, props.handleBackfromAddPatient)}>
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

export default connect(mapStateToProps, { handleBackfromAddPatient })(AddPatient);
