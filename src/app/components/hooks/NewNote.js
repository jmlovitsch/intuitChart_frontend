import { Modal, Button, Form } from "react-bootstrap";
import React from "react";
import { connect } from "react-redux";

function MyVerticallyCenteredModal(props) {
  const generateOptions = (place, [...props]) => {
    return [...props, ""].map((site) => {
      return (
        <option
          inline
          //   type="checkbox"
          label={site}
          name={place}
          id={`inline-${site}-2`}
          value={site}
        />
      );
    });
  };


console.log(props)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Critial-Care Pain Observation Tool
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Facial Expression</Form.Label>
            <Form.Control
              as="select"
              className="mb-3"
              name="scale_value"
              //   value={this.state.scale_value}
            >
              {generateOptions("Facial Expression", [
                "0, Relaxed, neutral",
                "2, Grimacing",
              ])}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Body Movements</Form.Label>
            <Form.Control
              as="select"
              className="mb-3"
              name="scale_value"
              //   value={this.state.scale_value}
            >
              {generateOptions("Body Movements", [
                "0, Absence of Movements",
                "1, Protection",
                "2, Restlessness",
              ])}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Muscle Tension</Form.Label>
            <Form.Control
              as="select"
              className="mb-3"
              name="scale_value"
              //   value={this.state.scale_value}
            >
              {generateOptions("Muscle Tension", [
                "0, Relaxed",
                "1, Tense, rigid",
                "2, Very tense or rigid",
              ])}
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Press to Toggle Intubated?</Form.Label>
            <Button
              className="mb-3"
              name="scale_value"
              onClick={props.setIntubated}
                >{props.intubated ? "Yes": "No"}</Button>
          </Form.Group>

{props.intubated ?
          <Form.Group>
            <Form.Label>Compliance with Ventilator</Form.Label>
            <Form.Control
              as="select"
              className="mb-3"
              name="scale_value"
              //   value={this.state.scale_value}
            >
              {generateOptions("Body Movements", [
                "0, Tolerating ventilator or movement",
                "1, Coughing by tolerating",
                "2, Fighting Ventilator",
              ])}
            </Form.Control>
          </Form.Group>
:
          <Form.Group>
            <Form.Label>Vocalization (extubated patients)</Form.Label>
            <Form.Control
              as="select"
              className="mb-3"
              name="scale_value"
              //   value={this.state.scale_value}
            >
              {generateOptions("Body Movements", [
                "0, Talking in normal tone or no sound",
                "1, Sighing, moaning",
                "2, Crying out, sobbing",
              ])}
            </Form.Control>
          </Form.Group>
}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export function CPOT() {
  const [modalShow, setModalShow] = React.useState(true);
    const [intubated, setIntubated] = React.useState(true)
  return (
    <>
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button> */}

      <MyVerticallyCenteredModal
        show={modalShow}
        intubated={intubated}
        setIntubated={()=>setIntubated(!intubated)}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
