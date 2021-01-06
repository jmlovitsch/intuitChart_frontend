import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Col, Row, Table } from "react-bootstrap";

class Summary extends Component {
  charts = [
    "care_plans",
    "consults",
    "dailycares",
    "diets",
    "educations",
    "imagings",
    "intakeoutputs",
    "ivs",
    "labs",
    "rxes",
    "shift_assessments",
    "shift_notes",
    "transfers",
    "vitals",
  ];

  renderCharts = () => {
    return this.charts.map((chart) => {
      //char => name of chart from array
        console.log("CHART", this.props.admission.[chart]) // the arrays associated with the chart name
      if (this.props.admission.[chart]) {
        //   return this.props.admission.[chart][0].map
        //   console.log(Object.keys(this.props.admission.[chart])) // an array of the cooresponding key names
        //   return (<Table>
        //       <thead>
        //           <tr>
        //           {Object.keys(this.props.admission.[chart][0]).map(title=>{
        //             return <th>{title}</th>})}

        //           </tr>
        //       </thead>
        //          </Table>)
        }









})
  }

  render() {
    return (
      <div>
        <div>{this.renderCharts()}</div>
        <div>{this.props.admission.admitting_diagnosis}</div>
        <Button>View Complete History</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  admission: state.admissions.currentAdmission,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
