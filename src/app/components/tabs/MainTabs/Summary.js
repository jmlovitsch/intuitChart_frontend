import React, { Component } from "react";
import { connect } from "react-redux";
import { Accordion, Button, Col, Row, Table, Card, Container } from "react-bootstrap";
import { Switch } from "react-router-dom";
import { fetchAllOnAdmission } from "../../../actions/admission";

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
    "pains"
  ];
  componentDidMount(){
      console.log(this.props.currentAdmission)
      this.props.fetchAllOnAdmission(this.props.admission.id)
  }
  renderChartHeader = () => {
    return this.charts.map((chart) => {
      const uppercasedd = chart.replace(chart[0], chart[0].toUpperCase());
      const spaced = uppercasedd.replaceAll("_", " ");

      //char => name of chart from array
      // console.log("CHART", this.props.admission.[chart]) // the arrays associated with the chart name
      if (this.props.admission[chart]) {
        // console.log("ZEROTH PLACE", this.props.admission.[chart][0])
        if (this.props.admission[chart][0]) {
          // console.log("2 PLACE", this.props.admission.[chart][0])

          return (
            <div style={{overflow: "scroll", width: "75vw"}} >
                <Accordion>
                <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <strong>{spaced}</strong>
              </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
              <Table
                striped
                bordered
                hover
                style={{ border: "5px solid #1761a0", width: "inherit"}}
              >
                <thead>
                  <tr>
                    {Object.keys(this.props.admission[chart][0]).map((c) => {
                      const uppercased = c.replace(c[0], c[0].toUpperCase());
                      const spaces = uppercased.replaceAll("_", " ");

                      return <th>{spaces}</th>;
                    })}
                  </tr>
                </thead>

                <tbody>
                  {this.props.admission[chart].map((c) => {
                    // console.log(Object.keys(c)); array of cooresponding keys
                    return (
                      <tr>
                        {Object.keys(c).map((key) => {
                          //   console.log(c.key);

                          return <td>{c[key]}</td>; ///returns the values in cooresponding rows
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </Table></Card.Body>
    </Accordion.Collapse>
  </Card>
              </Accordion>
            </div>
          );

          //   return (
          //     <Table>
          //       <thead>
          //         <tr>
          //           {Object.keys(this.props.admission[chart][0]).map((c) => {
          //             return <th>{c}</th>
          //           })}
          //         </tr>
          //       </thead>
          //       <tbody>
          //           <tr>
          //           {(this.props.admission[chart]).map((c) => {
          //               console.log(c)
          //           })}

          //           </tr>
          //       </tbody>
          //     </Table>
          //   );
        }
      }
    });
  };

  render() {
    return (
      <Card style={{ height: "100%", overflow: "scroll" }}>
        <Card.Body>
          <Container style={{ margin: "0", padding: "0" }}>
            {this.renderChartHeader()}
          </Container>
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  admission: state.admissions.currentAdmission,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, {fetchAllOnAdmission})(Summary);
