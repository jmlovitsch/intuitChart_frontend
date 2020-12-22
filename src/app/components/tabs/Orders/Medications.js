import React, { Component } from "react";
import { Form, Button, Container, Row, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchAllDrugs } from "../../../actions/drugs";

class Medication extends Component {
  state = {
    search: "",
    results: [],
    drugs: [],
  };

  componentDidMount() {
    this.props.fetchAllDrugs();
    this.setState({
      drugs: this.props.drugs,
    });
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });

    const newState = this.state.drugs.filter(
      (drug) =>
        drug.brand_name.slice(0, this.state.search.length) ===
        this.state.search.toUpperCase()
    );
    this.setState({
      results: newState,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  generateRows = () => {
    return this.state.results.map((result) => {
      return (
        <Row key={result.id}>
          {result.brand_name} | {result.generic_name} |{result.route} |
        </Row>
      );
    });
  };

  render() {
    return (
      <div className="scroll-page" >
        <Card className="scroll-page-title">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Search Drug Name</Form.Label>
              <Form.Control
                value={this.state.search}
                onChange={(e) => this.handleChange(e)}
              />
              <Button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#1761a0",
                }}
                type="submit"
              >
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Card>

        <Card className="all-drugs-scroll-page">{this.generateRows()}</Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  drugs: state.drug.drugs,
});

export default connect(mapStateToProps, { fetchAllDrugs })(Medication);
