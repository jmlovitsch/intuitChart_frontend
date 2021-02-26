import React, { Component } from "react";
import { Container, Card, Form, Row, Button, Col } from "react-bootstrap";
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
    this.props.fetchCreateMain(token, "physical_assessments", {
      physical_assessment: this.state,
    });
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
          {newTitle ? (
            <>
              <hr />
              <Row>
              <Form.Label
                id={newTitle}
                column="lg"
                style={{ textAlign: "center" }}
              >
                <strong>{newTitle}</strong>
              </Form.Label>
              <a style={{ color: "#1761a0"}} href="#top" >(top)</a>
              </Row>
            </>
          ) : null}
          <Form.Row key={pa}>
            <Form.Label
              column="lg"
              lg={4}
              for={pa}
              style={{ textAlign: "end" }}
            >
              {spaces}
            </Form.Label>
            <Col>
              {" "}
              <Form.Control
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

//   makeLinksFromSections = () => {
    // asyncCall();
    // function makeUniqueTitlesArray() {
    //   let allTitles = [];
    //   let uniqueTitles = [];
    //   physicalAssessment.map((pa) => {
    //     // const uppercased = pa.replace(pa[0], pa[0].toUpperCase());
    //     // const spaces = uppercased.replaceAll("_", " ");
    //     const title = pa.split("_")[0];
    //     // let newTitle = !!allTitles.includes(title)
    //     //   ? null
    //     //   : spaces.split(" ")[0];
    //     allTitles = allTitles.concat([title]);
    //     uniqueTitles = [...new Set(allTitles)];
    //   });
    //   return uniqueTitles;
    // }

    // async function asyncCall() {
    //   const result = await makeUniqueTitlesArray();
    //   console.log("wait", result);
    //   return result.map((l) => {
    //     return <a href={`#${l}`}>{l}</a>
    //   });
    // }


//   };
 makeUniqueTitlesArray = () => {
    let allTitles = [];
    let uniqueTitles = [];
    physicalAssessment.map((pa) => {
      const uppercased = pa.replace(pa[0], pa[0].toUpperCase());
      const spaces = uppercased.replaceAll("_", " ");
      const title = spaces.split(" ")[0];
    //   let newTitle = !!allTitles.includes(spaces)
    //     ? null
    //     : spaces.split(" ")[0];
      allTitles = allTitles.concat([title]);
      uniqueTitles = [...new Set(allTitles)];
    });
    console.log(uniqueTitles)
    return uniqueTitles.map((l) => {
        const f =`#${l}`
        return <a type="button" style={{ color: "#1761a0"}} href={f}>{l}</a>
      });
    }

  render() {


    return (
      <div style={{ height: "100%", overflow: "scroll" }}>
        <Form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <Form.Label
            column="lg"
            style={{ textAlign: "center", padding: "15px" }}
            id="top"
          >
            <strong>Enter Shift Assessment Notes</strong>
          </Form.Label>
          <Form.Control
            value={this.state.content}
            as="textarea"
            name="content"
            style={{ height: "20vh", paddingBlock: "15px" }}
          />

          <hr />
          <Card style={{ padding: "5px" }}>
            <Form.Label column="lg" style={{ textAlign: "center" }}>
              <strong>Physical Assessment Form</strong>
            </Form.Label>
            <Row style={{paddingRight: "20%", paddingLeft: "20%"}} lg={5}>
            {this.makeUniqueTitlesArray()}
            </Row  >
            <Row md={1} noGutters className="justify-content-between ">
              {this.printPhysicalAssessmentForm(this.makeLinksFromSections)}
            </Row>
            <Form.Group>
              <Row className="justify-content-end" style={{padding: "0", margin: "0"}}>
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
