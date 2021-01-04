import React, { Component } from "react";
import {
  Col,
  Form,
  Row,
  Button,
  Tooltip,
  InputGroup,
  OverlayTrigger,
} from "react-bootstrap";
import { connect } from "react-redux";
import { fetchCreateOrder } from "../../../actions/orders";

class Labs extends Component {
  state = {
    issued_how: "",
    source: "",
    time_due: "",
    frequency: "",
    provider: "",
    acknowledged_by: "",
    admission_id: this.props.admission.id,
    written_requested_by: this.props.user.id,
    author: this.props.user.id,
    sample_kind: "",
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
    this.props.fetchCreateOrder(token, "labs", { lab: this.state });
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

  switchOptions = () => {
    switch (this.state.source) {
      case "Blood":
        return this.generateOptions("sample_kind", ["PICC", "PIV", "Lab Draw"]);
      case "Urine":
        return this.generateOptions("sample_kind", [
          "Clean Catch",
          "Foley Cathetar",
          "Straight Cathetar",
        ]);
      case "Speutum":
        return this.generateOptions("sample_kind", [
          "Tracheal",
          "Cough and Spit",
        ]);
      case "Stool":
        return this.generateOptions("sample_kind", ["Colostomy", "Hat"]);
      default:
        return this.state.sample_kind;
    }
  };

  render() {
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

    console.log(this.props);
    const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        {props}
      </Tooltip>
    );
    return (
      <div>
        <Form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <Form.Group>
                {formLabel("How Issued")}
                <Form.Control
                  as="select"
                  value={this.state.issued_how}
                  className="mb-3"
                  name="issued_how"
                >
                  {this.generateOptions("issued_how", [
                    "Telephone with readback",
                    "Verbal with readback",
                    "Per Protocol no cosign required",
                  ])}
                </Form.Control>
                <Row md={2} style={{ margin: "0" }}>
                  <Form.Group>
                    {formLabel("Source")}
                    <Form.Control
                      as="select"
                      value={this.state.source}
                      className="mb-3"
                      name="source"
                    >
                      {this.generateOptions("source", [
                        "Blood",
                        "Speutum",
                        "Urine",
                        "Stool",
                      ])}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group>
                    {formLabel("Kind")}
                    <Form.Control
                      as="select"
                      value={this.state.sample_kind}
                      className="mb-3"
                      name="sample_kind"
                    >
                      {this.switchOptions()}
                    </Form.Control>
                  </Form.Group>
                </Row>
                {formLabel("Time Due")}
                <Form.Control
                  as="select"
                  value={this.state.time_due}
                  className="mb-3"
                  name="time_due"
                >
                  {this.generateOptions("time_due", [
                    "STAT",
                    "Timed",
                    "Routine",
                  ])}
                </Form.Control>
                {formLabel("Frequency")}{" "}
                <Form.Control
                  as="select"
                  value={this.state.frequency}
                  className="mb-3"
                  name="frequency"
                >
                  {this.generateOptions("frequency", [
                    "Once",
                    "Daily",
                    "Series",
                    "Daily for Days",
                  ])}
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
                  Submit Order
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

export default connect(mapStateToProps, { fetchCreateOrder })(Labs);
