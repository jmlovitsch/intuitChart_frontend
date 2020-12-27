import React, { Component } from "react";
import { Form, Button, Container, Row, Card, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { createPrescription, fetchAllDrugs } from "../../../actions/drugs";
import LoadingCard from "../../hooks/LoadingCard";
import PrescribeRx from "../../hooks/PrescripeRx";

class Medication extends Component {
  state = {
    search: "",
    results: null,
    drugs: [],
    prescribe: false,
    rxToPrescribe: "",

      provider: this.props.user.id,
      admission_id: 1,
      written_requested_by: this.props.user.id,

        route: "",
        iv_rate: "",
        source_location: "",
        dose: "",
        time_due: "",
        frequency: "",
        if_prn_reason: "",
        duration: "",


  };

  createPrescription = () => {
    const bodyObj = {
        order: {
            provider: this.state.provider,
            admission_id: this.state.admission_id,
            written_requested_by: this.state.written_requested_by,

                  medication: this.state.rxToPrescribe,
                  route: this.state.route,
                  iv_rate: this.state.iv_rate,
                  source_location: this.state.source_location,
                  dose: this.state.dose,
                  time_due: this.state.time_due,
                  frequency: this.state.frequency,
                  if_prn_reason: this.state.if_prn_reason,
                  duration: this.state.duration,



        }
    }
    const token = localStorage.getItem("my_app_token");

    this.props.createPrescription(token, bodyObj)


  }


  componentDidMount() {
    //   if (this.props.user.employee_type === ('doctor' || 'nurse')){
    if (!this.props.drugs.length) {
      this.props.fetchAllDrugs();
    }
    //   }
    this.setState({
      drugs: this.props.drugs,
    });
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });

    // const newState = this.state.drugs.filter(
    //   (drug) =>
    //     drug.brand_name.slice(0, this.state.search.length) ===
    //     this.state.search.toUpperCase()
    // );
    // this.setState({
    //   results: newState,
    // });
  };



  handleSubmit = (event) => {
    event.preventDefault();
    const newState = this.state.drugs.filter((drug) => {
      return (
        drug.brand_name.slice(0, this.state.search.length) ===
        this.state.search.toUpperCase()
      );
    });
    this.setState({
      results: newState,
    });
  };

  handleClick = (event) => {
    const rxToPrescribe = this.state.results.find(
      (result) => parseInt(event.target.id, 10) === result.id
    );
    console.log(rxToPrescribe);
    this.setState({
      prescribe: true,
      drug_id: event.target.id,
      rxToPrescribe: rxToPrescribe,
    });
  };

  generateRows = () => {
    return (
      <Container>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Brand</th>
              <th>Generic</th>
              <th>Route</th>
              <th>Active Ingredients</th>
              <th>Substance</th>
            </tr>
          </thead>
          <tbody>{this.renderMeds()}</tbody>
        </Table>
      </Container>
    );
  };

  renderMeds = () => {
    return this.state.results.map((d) => {
      return (
        <tr key={d.id}>
          <td>
            {d.brand_name}
            <br />
            <Button
              id={d.id}
              name="selectDrug"
              onClick={(e) => {
                this.handleClick(e);
              }}
            >
              Select
            </Button>
          </td>
          <td>{d.generic_name}</td>
          <td>{d.route}</td>
          <td>{d.substance_name}</td>
          <td>{d.active_ingredients}</td>
        </tr>
      );
    });
  };

  handleBack = () => {
    this.setState({
      prescribe: false,
      drug_id: "",
    });
  };

  generateRx = (event) => {
this.setState({
    [event.target.name]: event.target.value
})  };

  render() {
    const { results } = this.state;
    return (
      <div className="scroll-page">
        {this.state.prescribe ? (
          <>
            {" "}
            <PrescribeRx
              handleBack={this.handleBack}
              rx={this.state}
              generateRx={this.generateRx}
              rxToPrescribe={this.state.rxToPrescribe}
              bodyObj={this.bodyObj}
              createPrescription={this.createPrescription}
            />
          </>
        ) : (
          <>
            <Card className="scroll-page-title">
              {this.props.loading ? (
                <LoadingCard />
              ) : (
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <Form.Label>Search Drug Name</Form.Label>
                    <Form.Control
                      value={this.state.search}
                      onChange={(e) => this.handleChange(e)}
                    />
                  </Form.Group>

                  <Form.Group className="justify-content-end">
                    <Button
                      onClick={this.setSubmitTime}
                      type="submit"
                      style={{
                        backgroundColor: "transparent",
                        border: "solid",
                        color: "#1761a0",
                      }}
                    >
                      Search
                    </Button>
                  </Form.Group>
                </Form>
              )}
            </Card>

            <Card className="all-drugs-scroll-page">
              {Array.isArray(results)
                ? results.length === 0
                  ? "No Medications Available Under That Search"
                  : this.generateRows()
                : "Search Results Will Appear Here"}{" "}
            </Card>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.drugs.loading,
  drugs: state.drugs,
  user: state.user,
});

export default connect(mapStateToProps, { fetchAllDrugs, createPrescription })(Medication);
