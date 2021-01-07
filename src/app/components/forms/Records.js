import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { PdfPrinter } from '../hooks/PdfPrinter'

const Records = (props) => {

    const renderAdmissionsPDFs =() => {
        if(props.admissions.length > 0){
            return <ListGroup >{
             props.admissions.map(a=>{
                const splitDateTime = a.created_at.split("T")

                const splitDate = splitDateTime[0].split("-")
                const timetime = splitDateTime[1].split(":")
                const seconds = timetime[2].split(".")
                const event = new Date(splitDate[0], splitDate[1], splitDate[2], timetime[0], timetime[1], seconds[0]);
                console.log(event)
                return <><ListGroup.Item action >
                <strong>Admission Date: </strong>{event.toString()}{" "}{"|"}{" "} {a.healthcare_provider ? <><strong>Healthcare System:</strong> {a.healthcare_provider} </> : null}
                {/* add location or health care information to an admission */}
              </ListGroup.Item><br/></>
            })
        }</ListGroup>
        } else {
            return <div class=" h-100  d-flex justify-content-center align-items-center">
            <Card style={{ backgroundColor: "#238a913d", width: "25%"}} className="login-card" >When you have admissions, they will be visible here for your review and PDF creation.</Card></div>
        }
    }




    return (


        <div style={{padding: "2rem", overflow: "scroll", height: "100%"}} >
            {renderAdmissionsPDFs()}
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Records)
