import React, { Component } from 'react'
import { connect } from 'react-redux'
import Drug from '../../Drug'

const Orders = () => {
    return (
        <div>
            Orders
            <Drug />
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
