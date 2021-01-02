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
        author: this.props.user.id.toString()

  };

  handleChange = (event) => {
    console.log(event.target.name);
    this.setState({
            [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
    const token = localStorage.getItem("my_app_token")
    this.props.fetchCreateAssessment(token, "vitals", {vital: this.state})
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
      console.log(this.props)
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
    console.log(this.state)
    return (
      <div>
        <Form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <Form.Group>
                {formLabel("Blood Pressure")}
                {formLabel("Systolic")}
                <InputGroup>
                  <Form.Control type="number" value={this.state.systolic} />
                  <InputGroup.Append>
                    <InputGroup.Text className="mb-3">mm/Hg</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                {formLabel("Diastolic")}
                <InputGroup>
                  <Form.Control type="number" value={this.state.diastolic} />
                  <InputGroup.Append>
                    <InputGroup.Text className="mb-3">mm/Hg</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>


                {formLabel("BP Site")}
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


                {formLabel("BP Position")}
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


                {formLabel("BP type")}{" "}
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
                {formLabel("Heart Rate")}
                {formLabel("HR Type")}
                <Form.Control
                  as="select"
                  value={this.state.hr_type}
                  className="mb-3"
                  name="hr_type"
                >
                  {this.generateOptions("hr_type", ["Monitor", "Manual"])}
                </Form.Control>

                {formLabel("HR BPM")}{" "}
                <InputGroup>
                  <Form.Control type="number" placeholder="HR" />
                  <InputGroup.Append>
                    <InputGroup.Text className="mb-3">bpm</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>

                {formLabel("HR Quality")}
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
                {formLabel("Temp. Site")}{" "}
                <Form.Control
                  as="select"
                  value={this.state.temp_site}
                  className="mb-3"
                  name="temp_site"
                >
                  {this.generateOptions("temp_site", ["Under Arm", "Mouth"])}
                </Form.Control>


                {formLabel("Temperature Degrees")}
                <Form.Control
                  type="number"
                  value={this.state.temp_degree}
                  className="mb-3"
                  name="temp_degree"
                />


                {formLabel("Respiration Rate")}
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


                {formLabel("RR/min")}{" "}
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


                {formLabel("RR Quality")}{" "}
                <Form.Control as="select" value={this.state.rr_quality} name="rr_quality">
                  {this.generateOptions("rr_quality", ["Regular", "Irregular"])}
                </Form.Control>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                {formLabel("Oxygen")}
                {formLabel("O2 Saturation")}
                <InputGroup>
                  <Form.Control type="number" value={this.state.o2_saturation} name="o2_saturation" />
                  <InputGroup.Append>
                    <InputGroup.Text>sat%</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>

                {formLabel("O2 Source")}
                <Form.Control as="select" value={this.state.o2_source} name="o2_source">
                  {this.generateOptions("o2_source", [
                    "None (Room Air)",
                    "Nasal Canula",
                    "Nasal Canula: Hi Flow",
                  ])}
                </Form.Control>


                {formLabel("O2 Site")}
                <Form.Control as="select" value={this.state.o2_site} name="o2_site" >
                  {this.generateOptions("o2_site", ["????", "????"])}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <hr />

          <Form.Group as={Row}>
            <Col>
              <Button type="submit">Submit</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    user: state.user,
    admission: state.admissions.currentAdmission
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, {fetchCreateAssessment})(Vitals);
