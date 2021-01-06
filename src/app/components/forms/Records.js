import React from 'react'
import { connect } from 'react-redux'
import { PdfPrinter } from '../hooks/PdfPrinter'


export const Records = (props) => {
    console.log(props)
    return (
        <div>
          <PdfPrinter /> Render all Medical Records Here
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user,
    records: state.records,
    admissions: state.user.admissions
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Records)
