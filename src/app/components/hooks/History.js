import React, { Component, useState } from "react";
import { Card, Col, Table, Button, Modal, Form } from "react-bootstrap";
import { connect } from "react-redux";

function MyHistoryCharts(props) {

  const arrayForInfo = [
    "vitals",
    "pains",
    // "dailycares",
    "intakeoutputs",
    // "medications",
    "labs",
    // "nursings",
    // "consults",
    // "imagings",
    "diets",
    // "transfers",
    // "admitting",
    // "educations",
    "rxes",
    // "shift_assessments",
    // "shift_notes",
    // "summaries",
    // "transfers",
    // "care_plans",
  ];

  const tables = arrayForInfo.map((cat) => {
    if (props.historyInfo[0][cat]) {
      console.log(props.historyInfo[0][cat].length === 0);
      if (props.historyInfo[0][cat].length !== 0) {
        return (
          <Table striped bordered hover>
            <thead>
              <tr >
                {Object.keys(props.historyInfo[0][cat][0]).map((stuff) => {
                  return <th>{stuff}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              <tr>
              {Object.keys(props.historyInfo[0][cat][0]).map((stuff) => {
                   props.historyInfo[0][cat].map(asd=>{
                      console.log(props.historyInfo[0].cat.stuff.asd)
                  });
                })}
              </tr>
            </tbody>
          </Table>
        );
      }
    }
  });
  return (
    <Modal
      {...props}
      centered
    style={{overflow: "scroll" }}
      dialogClassName="modal-10w"

    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Patient History
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {tables}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export function HistoryChart(props) {
    const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)} >
        History
      </Button>

      <MyHistoryCharts
       show={show}
       onHide={() => setShow(false)}
       dialogClassName="modal-90w"
       aria-labelledby="example-custom-modal-styling-title"
        // show={modalShow}
        // onHide={() => setModalShow(false)}
        historyInfo={props.historyInfo}
        // dialogClassName="modal-90w"
        // aria-labelledby="example-custom-modal-styling-title"
      />
    </>
  );
}
