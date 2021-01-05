import React from 'react'
import { connect } from 'react-redux'

export const Records = (props) => {
    return (
        <div>
           Render all Medical Records Here
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user,
    records: state.records
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Records)
