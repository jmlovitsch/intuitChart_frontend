import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux'

const MAR = (props) => {
    console.log(props.rxes)

    const renderDrugs = (props) => {
        return props.map(rx=>{
            return (
                <div style={{overflow: "scroll", width: "75vw"}} >
                  {/* <strong>{rx}</strong> */}
                  <Table
                    striped
                    bordered
                    hover
                    style={{ border: "5px solid #1761a0", width: "inherit"}}
                  >
                    <thead>
                      <tr>
                        {Object.keys([rx][0]).map((c) => {
                          return <th>{c}</th>;
                        })}
                      </tr>
                    </thead>

                    <tbody>
                      {[rx].map((c) => {
                        // console.log(Object.keys(c)); array of cooresponding keys
                        return (
                          <tr>
                            {/* {Object.keys(c).map((key) => {
                              //   console.log(c.key);

                              return <td>{c[key]}</td>; ///returns the values in cooresponding rows
                            })} */}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
              );

        })
    }
    return (
        <div>
            {renderDrugs(props.rxes)}
        </div>
    )
}

const mapStateToProps = (state) => ({
    rxes: state.admissions.currentAdmission.rxes
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(MAR)
