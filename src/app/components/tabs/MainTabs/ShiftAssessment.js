import React, { Component } from "react";
import { Card, Form, Row, Button, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchCreateMain } from "../../../actions/main";
import { physicalAssessment } from "../../../categories/UserCategories";

class ShiftAssessment extends Component {
  state = {
      content: "",
    admission_id: this.props.admission.id,
    author: this.props.user.id,
  };

  componentDidMount() {
    physicalAssessment.map((pa) => {
      this.setState({ [pa]: "WDL" });
    });
  }

  handleChange = (event) => {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("my_app_token");
    this.props.fetchCreateMain(token, "physical_assessments", { physical_assessment: this.state });
  };

  printPhysicalAssessmentForm = () => {
    let allTitles = [];

    return physicalAssessment.map((pa) => {
      const uppercased = pa.replace(pa[0], pa[0].toUpperCase());
      const spaces = uppercased.replaceAll("_", " ");
      const title = pa.split("_")[0];
      let newTitle = !!allTitles.includes(title) ? null : spaces.split(" ")[0];
      allTitles = allTitles.concat([title]);
      let uniqueTitles = [...new Set(allTitles)];

      return (
        <>
          {newTitle ? (<><hr/>
            <Form.Label  column="lg"  style={{textAlign: "center"}}>
              <strong>{newTitle}</strong>
            </Form.Label></>
          ) : null}
          <Form.Row  key={pa}>
            <Form.Label column="lg" lg={3} for={pa} style={{textAlign: "end"}}>
              <strong>{spaces}</strong>
            </Form.Label>
            <Col>            <Form.Control
            as={Col}
              id={pa}
              value={this.state.pa}
              defaultValue="WDL"
              as="input"
              name={pa}
            />
</Col>
          </Form.Row>
        </>
      );
    });
  };

  render() {
    console.log(this.state);
    return (
      <div style={{ height: "100%", overflow: "scroll" }}>
        <Form
          style={{ padding: "0", margin: "50px" }}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        >
          <Form.Group style={{ padding: "0", margin: "0" }}>
            <Form.Label>
              <strong>Enter Shift Assessment Notes</strong>
            </Form.Label>
            <Form.Control
              value={this.state.content}
              as="textarea"
              name="content"
              style={{ height: "20vh", width: "100%" }}
            />
          </Form.Group>
          <hr />
          <Card style={{ padding: "5px" }}>
            <Form.Label>
              <strong>Physical Assessment:</strong>
            </Form.Label>

            <Row  md={1} noGutters className="justify-content-between ">
              {this.printPhysicalAssessmentForm()}
            </Row>
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
          </Card>
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

export default connect(mapStateToProps, { fetchCreateMain })(ShiftAssessment);
