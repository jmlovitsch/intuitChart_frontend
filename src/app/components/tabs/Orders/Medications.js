import React, { Component } from "react";
import { Form, Button, Container, Card, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { createPrescription, fetchAllDrugs } from "../../../actions/drugs";
import LoadingCard from "../../hooks/LoadingCard";
import PrescribeRx from "../../hooks/PrescripeRx";
import { fetchCreateOrder } from "../../../actions/orders";

class Medication extends Component {
  state = {
    search: "",
    results: null,
    drugs: [],
    prescribe: false,
    rxToPrescribe: "",

      provider: this.props.user.id,
      admission_id: this.props.admission.id,
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
        rx: {
            provider: this.state.provider,
            admission_id: this.state.admission_id,
            written_requested_by: this.state.written_requested_by,
            acknowledged_by: "",
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
    if(this.props.drugs.length !== 21428){
      this.props.fetchAllDrugs();}

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
      <Container style={{padding: "0", margin: "0"}}>
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>Brand</th>
              <th>Generic</th>
              <th>Route</th>
              <th>Active Ingredients</th>
              <th>Dosage</th>
            </tr>
          </thead>
          <tbody>{this.renderMeds()}</tbody>
        </Table>
      </Container>
    );
  };

  renderMeds = () => {
    return this.state.results.map((d) => {

        console.log(    d.active_ingredients.split('"')[3]      )
      return (
        <tr key={d.id}>
          <td>
            {d.brand_name}
            <br />
            <Button
              id={d.id}
              style={{
                backgroundColor: "transparent",
                border: "solid",
                color: "#1761a0",
              }}

              name="selectDrug"
              onClick={(e) => {
                this.handleClick(e);
              }}
            >
              Select
            </Button>
          </td>
          <td>{d.generic_name.split('"')[1]}</td>
          <td>{d.route.split('"')[1]}</td>
          <td>{d.substance_name.split('"')[1]}</td>
          <td>{d.active_ingredients.split('"')[3]}</td>
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
      console.log("DRUGS", this.props.drugs)
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
  admission: state.admissions.currentAdmission
});

export default connect(mapStateToProps, { fetchAllDrugs, createPrescription, fetchCreateOrder })(Medication);
