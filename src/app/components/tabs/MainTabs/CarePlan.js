import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Tooltip,
  InputGroup,
  Form,
  Button,
  Col,
  Row,
  Card,
  Overlay,
  OverlayTrigger,
  ListGroup,
} from "react-bootstrap";
import { fetchAllCareplans, fetchCreateCarePlan } from "../../../actions/careplan";
import  PatientCarePlan  from "../../forms/PatientCarePlan";

class CarePlan extends Component {
  state = {
    author: this.props.user.id,
    diagnosis_category: "",
    nursing_diagnosis: "",
    ocs: [],
    acs: [],
    admission_id: this.props.currentAdmission.id,
  };

  componentDidMount() {
    if (this.props.careplans.length === 0) {
      this.props.fetchAllCareplans();
    }
  }

  handleChange = (event) => {
    console.log(event.target.name);
    if (event.target.type === "checkbox") {
      if (event.target.name === "ocs") {
        return this.setState({
          ocs: this.state.ocs.concat(event.target.value),
        });
      } else if (event.target.name === "acs") {
        return this.setState({
          acs: this.state.acs.concat(event.target.value),
        });
      } else {
        return null;
      }
    } else {
      return this.setState({
        [event.target.name]: event.target.value,
      });
    }
  };

  handleDateChange = (event) => {
    this.setState({
      dressing_change_due: event,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("my_app_token");
    this.props.fetchCreateCarePlan(token, {care_plan: this.state} );
    this.setState({
        author: this.props.user.id,
        diagnosis_category: "",
        nursing_diagnosis: "",
        ocs: [],
        acs: [],
        admission_id: this.props.currentAdmission.id,
    })
  };

  generateOptions = (place, [...props]) => {
    return [...props, ""].map((site) => {
      return (
        <option
          inline
          type="checkbox"
          label={site}
          name={place}
          id={`inline-${site}-2`}
          value={site}
        />
      );
    });
  };
  formLabel = (props) => {
    return (
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={this.renderTooltip(props)}
      >
        <Form.Label as={Row} value={props} />
      </OverlayTrigger>
    );
  };

  nursing_diagnosis = () => {
    if (this.state.diagnosis_category !== "") {
      let ind = this.props.careplans.find((care) => {
        return care.name === this.state.diagnosis_category;
      });
      let ni = ind.nursing_diagnoses.map((c) => {
        return c.name;
      });
      return this.generateOptions("nursing_diagnosis", ni);
    }
  };

  interventionsOptions = () => {
    if (this.state.nursing_diagnosis !== "") {
      let ind = this.props.careplans.find((care) => {
        return care.name === this.state.diagnosis_category;
      });
      let ni = ind.nursing_diagnoses.filter((c) => {
        return c;
      });
      let xi = ni.find((n) => {
        return n.name === this.state.nursing_diagnosis;
      });
      let yi = xi.interventions.map((i) => {
        return i.item;
      });

      return (
        <ListGroup style={{ padding: "10px" }}>
          {yi.map((y) => {
            return (
              <ListGroup.Item>
                <Form.Check
                  type="checkbox"
                  id={`default-checkbox`}
                  label={y}
                  value={y}
                  name="acs"
                />
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      );
    }
  };
  goalsOptions = () => {
    if (this.state.nursing_diagnosis !== "") {
      let ind = this.props.careplans.find((care) => {
        return care.name === this.state.diagnosis_category;
      });
      let ni = ind.nursing_diagnoses.filter((c) => {
        return c;
      });
      let xi = ni.find((n) => {
        return n.name === this.state.nursing_diagnosis;
      });
      let yi = xi.goals.map((g) => {
        return g.item;
      });

      return (
        <ListGroup style={{ padding: "10px" }}>
          {yi.map((y) => {
            return (
              <ListGroup.Item>
                <Form.Check
                  type="checkbox"
                  id={`default-checkbox`}
                  label={y}
                  value={y}
                  name="ocs"
                />
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      );
    }
  };
  eraseState = () => {
    this.setState({
      nursing_diagnosis: "",
    });
  };
  render() {
    console.log(this.state);
    const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        {props}
      </Tooltip>
    );

    const formLabel = (props) => {
      return (
        <OverlayTrigger
          placement="left"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip(props)}
        >
          <Form.Label as={Row} className="justify-content-center">
            {props}
          </Form.Label>
        </OverlayTrigger>
      );
    };
    console.log(this.props)
    return (
      <Card style={{ height: "100%", overflow: "scroll" }}>
        <Card.Body>
            {false ?
          <Form onChange={this.handleChange} onSubmit={this.handleSubmit}>
            <Row>
              <Col>
                <Form.Group>
                  <Row md="2" style={{ margin: "0" }}>
                    <Form.Group as={Col}>
                      {formLabel("Careplan Category")}
                      <Form.Control
                        as="select"
                        value={this.state.diagnosis_category}
                        className="mb-3"
                        name="diagnosis_category"
                        onChange={this.eraseState}
                      >
                        {this.generateOptions(
                          "diagnosis_category",
                          this.props.careplans.map((care) => {
                            return care.name;
                          })
                        )}
                      </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col}>
                      {formLabel("Nursing Diagnosis")}
                      <Form.Control
                        as="select"
                        value={this.state.nursing_diagnosis}
                        className="mb-3"
                        name="nursing_diagnosis"
                      >
                        {this.nursing_diagnosis()}
                      </Form.Control>
                    </Form.Group>
                  </Row>

                  <Form.Group>
                    {this.state.nursing_diagnosis !== ""
                      ? formLabel("Goals")
                      : null}
                    {this.goalsOptions()}
                  </Form.Group>
                  <Form.Group>
                    {this.state.nursing_diagnosis !== ""
                      ? formLabel("Interventions")
                      : null}
                    {this.interventionsOptions()}
                  </Form.Group>
                </Form.Group>
              </Col>
            </Row>

            <hr />

            <Form.Group>
              <Row className="justify-content-end">
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "transparent",
                    border: "solid",
                    color: "#1761a0",
                  }}
                >
                  Submit Care Plan
                </Button>
              </Row>
            </Form.Group>
          </Form>
          :
          <PatientCarePlan />}
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  admissions: state.admissions.array,
  currentAdmission: state.admissions.currentAdmission,
  currentPatient: state.patients.currentPatient,
  careplans: state.careplans.array,
  patientCareplan: state.careplans.patientCareplan
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { fetchAllCareplans, fetchCreateCarePlan })(CarePlan);
