import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'

class PatientCarePlan extends Component {
    render() {
        console.log(this.props.patientCareplan)
        return (
            <div>
                <Card>
                    <Card.Header><strong>Diagnosis Category:</strong> {this.props.patientCareplan.diagnosis_category}</Card.Header>
                    <Card.Header><strong>Nursing Diagnosis:</strong> {this.props.patientCareplan.nursing_diagnosis}</Card.Header>
                    <Card.Header><strong>   Goals/Desired Outcomes</strong></Card.Header>
                    <ul>{this.props.patientCareplan.ocs.split("-/-").map(o=>{
                    return <Card.Body><li>{o}</li></Card.Body>})}</ul>
                    <Card.Header><strong>Interventions/Actions</strong></Card.Header>
                    <ul>{this.props.patientCareplan.acs.split("-/-").map(a=>{
                    return <Card.Body><li>{a}</li></Card.Body>})}</ul>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    admissions: state.admissions.array,
    currentAdmission: state.admissions.currentAdmission,
    currentPatient: state.patients.currentPatient,
    careplans: state.careplans.array,
    patientCareplan: state.careplans.patientCareplan
  })

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PatientCarePlan)
