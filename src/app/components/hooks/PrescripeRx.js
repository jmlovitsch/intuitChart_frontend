import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { createPrescription } from "../../actions/drugs";

const PrescribeRx = (props) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  const token = localStorage.getItem("my_app_token");
  return (
    <>
      <Modal
      size="xl"
        show={show}
        backdrop="static"
        onHide={(handleClose, props.handleBack)}
        // keyboard={false}
        // dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Prescribe Rx: {props.rxToPrescribe.brand_name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onChange={props.generateRx()}>
              <Row>
            <Form.Group as={Col}>
              <Form.Label>Route</Form.Label>
              <Form.Control type="select" name="route" value={props.rx.route} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>IV Rate</Form.Label>
              <Form.Control
                type="select"
                name="iv_rate"
                value={props.rx.iv_rate}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Source Location</Form.Label>
              <Form.Control
                type="select"
                name="source_location"
                value={props.rx.source_location}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Dose</Form.Label>
              <Form.Control type="select" name="dose" value={props.rx.dose} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Time Due</Form.Label>
              <Form.Control
                type="select"
                name="time_due"
                value={props.rx.time_due}
              />
            </Form.Group>
            </Row>
            <hr/>
            <Row>
            <Form.Group as={Col}>
              <Form.Label>Frequency</Form.Label>
              <Form.Control
                type="select"
                name="frequency"
                value={props.rx.frequency}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>PRN Reason</Form.Label>
              <Form.Control
                type="select"
                name="if_prn_reason"
                value={props.rx.if_prn_reason}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type="select"
                name="duration"
                value={props.rx.duration}
              />
            </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={(handleClose, () => props.createPrescription(token))}
          >
            Prescribe
          </Button>
          <Button variant="primary" onClick={(handleClose, props.handleBack)}>
            Go Back
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { createPrescription })(PrescribeRx);
