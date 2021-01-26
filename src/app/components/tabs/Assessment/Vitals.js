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
} from "react-bootstrap";
import { fetchCreateAssessment } from "../../../actions/assessment";

class Vitals extends Component {
  state = {
    bp_systolic: "",
    bp_diastolic: "",
    bp_site: "",
    bp_position: "",
    bp_type: "",
    hr_type: "",
    hr_bpm: "",
    hr_quality: "",
    temp_site: "",
    temp_degree: "",
    rr_hr: "",
    rr_rrmin: "",
    rr_quality: "",
    o2_saturation: "",
    o2_source: "",
    o2_site: "",
    admission_id: this.props.admission.id,
    author: this.props.user.id.toString(),
  };

  handleChange = (event) => {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    const token = localStorage.getItem("my_app_token");
    this.props.fetchCreateAssessment(token, "vitals", { vital: this.state });
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

  myFunction = () => {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  };

  render() {

    const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
          Last Four Entries:
          {props.map(p=>{
              return <p>{p}</p>
          })}

      </Tooltip>
    );

    const formLabel = (named, status) => {
        const lastFour = this.props.admission.vitals.map(vital => {
            return vital.[status]
        })

        const trueFour = lastFour.slice(-4)

      return (
        <OverlayTrigger
          placement="left"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip(trueFour)}
        >
          <Form.Label as={Row} className="justify-content-center">
            {named}
          </Form.Label>
        </OverlayTrigger>
      );
    };
    console.log(this.state);
    return (
      <div >
        <Form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <Form.Group>
                {formLabel("Systolic", "bp_systolic" )}
                {formLabel("Diastolic", "bp_diastolic" )}
                <InputGroup>
                  <Form.Control type="number" name="bp_systolic" value={this.state.systolic} />
                  <InputGroup.Append>
                    <InputGroup.Text className="mb-3">/</InputGroup.Text>
                  </InputGroup.Append>
                  <Form.Control type="number" name="bp_diastolic" value={this.state.diastolic} />
                  <InputGroup.Append>
                    <InputGroup.Text className="mb-3">mm/Hg</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                {formLabel("BP Site", "bp_site")}
                <Form.Control
                  as="select"
                  value={this.state.bp_site}
                  className="mb-3"
                  name="bp_site"
                >
                  {this.generateOptions("bp_site", [
                    "Upper Right Arm",
                    "Lower Right Arm",
                    "Upper Left Arm",
                    "Lower Left Arm",
                  ])}
                </Form.Control>
                {formLabel("BP Position", "bp_position")}
                <Form.Control
                  as="select"
                  value={this.state.bp_position}
                  className="mb-3"
                  name="bp_position"
                >
                  {this.generateOptions("bp_position", [
                    "Laying Down",
                    "Sitting Up",
                    "Standing Up",
                  ])}
                </Form.Control>
                {formLabel("BP type", "bp_type")}{" "}
                <Form.Control
                  as="select"
                  value={this.state.bp_type}
                  className="mb-3"
                  name="bp_type"
                >
                  {this.generateOptions("bp_type", [
                    "Manual",
                    "Automatic",
                    "Doppler",
                  ])}
                </Form.Control>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                {formLabel("Heart Rate" )}
                {formLabel("HR Type", "hr_type")}
                <Form.Control
                  as="select"
                  value={this.state.hr_type}
                  className="mb-3"
                  name="hr_type"
                >
                  {this.generateOptions("hr_type", ["Monitor", "Manual"])}
                </Form.Control>
                {formLabel("HR BPM", "hr_bpm")}{" "}
                <InputGroup>
                  <Form.Control type="number" placeholder="HR" />
                  <InputGroup.Append>
                    <InputGroup.Text className="mb-3">bpm</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                {formLabel("HR Quality", "hr_quality")}
                <Form.Control
                  as="select"
                  value={this.state.hr_quality}
                  className="mb-3"
                  name="hr_quality"
                >
                  {this.generateOptions("hr_quality", ["Regular", "Irregular"])}
                </Form.Control>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                {formLabel("Temperature")}
                {formLabel("Temp. Site", "temp_site")}{" "}
                <Form.Control
                  as="select"
                  value={this.state.temp_site}
                  className="mb-3"
                  name="temp_site"
                >
                  {this.generateOptions("temp_site", ["Under Arm", "Mouth"])}
                </Form.Control>
                {formLabel("Temperature Degrees", "temp_degree")}
                <Form.Control
                  type="number"
                  value={this.state.temp_degree}
                  className="mb-3"
                  name="temp_degree"
                />
                {formLabel("Respiration Rate", "rr_hr")}
                {formLabel("RR-HR")}{" "}
                <Form.Control
                  as="select"
                  value={this.state.rr_hr}
                  className="mb-3"
                  name="rr_hr"
                >
                  {this.generateOptions("rr_hr", [
                    "Regular",
                    "Labored",
                    "Shallow",
                    "Irregular",
                  ])}
                </Form.Control>
                {formLabel("RR/min", "rr_rrmin")}{" "}
                <InputGroup>
                  <Form.Control
                    type="number"
                    value={this.state.rr_rrmin}
                    className="mb-3"
                    name="rr_rrmin"
                  />
                  <InputGroup.Append>
                    <InputGroup.Text className="mb-3">RR/min</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                {formLabel("RR Quality", "rr_quality")}{" "}
                <Form.Control
                  as="select"
                  value={this.state.rr_quality}
                  name="rr_quality"
                >
                  {this.generateOptions("rr_quality", ["Regular", "Irregular"])}
                </Form.Control>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                {formLabel("Oxygen")}
                {formLabel("O2 Saturation", "o2_saturation")}
                <InputGroup>
                  <Form.Control
                    type="number"
                    value={this.state.o2_saturation}
                    name="o2_saturation"
                  />
                  <InputGroup.Append>
                    <InputGroup.Text>sat%</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>

                {formLabel("O2 Source", "o2_source")}
                <Form.Control
                  as="select"
                  value={this.state.o2_source}
                  name="o2_source"
                >
                  {this.generateOptions("o2_source", [
                    "None (Room Air)",
                    "Nasal Canula",
                    "Nasal Canula: Hi Flow",
                  ])}
                </Form.Control>

                {formLabel("O2 Site", "o2_site")}
                <Form.Control
                  as="select"
                  value={this.state.o2_site}
                  name="o2_site"
                >
                  {this.generateOptions("o2_site", ["????", "????"])}
                </Form.Control>
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
                Submit Assessment
              </Button>
            </Row>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  admission: state.admissions.currentAdmission,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, { fetchCreateAssessment })(Vitals);
