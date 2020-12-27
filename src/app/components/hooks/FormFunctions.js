// import {
//     Tooltip,
//     InputGroup,
//     Form,
//     Button,
//     Col,
//     Row,
//     Card,
//     Overlay,
//     OverlayTrigger,
//   } from "react-bootstrap";

// import React from 'react'
// import { connect } from 'react-redux'


// export const FormFunctions = (props) => {

//    const  handleChange = (event)=> {
//         console.log(event.target.name);
//         this.setState({
//           [event.target.name]: event.target.value,
//         });
//       };

//      const  handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(this.state)
//       };

//      const generateOptions = (place, [...props]) => {
//         return [...props].map((site) => {
//           return (
//             <option
//               inline
//               type="checkbox"
//               label={site}
//               name={place}
//               id={`inline-${site}-2`}
//               value={site}
//             />
//           );
//         });
//       };

//    const  formLabel=  (props) => {
//         return (
//           <OverlayTrigger
//             placement="right"
//             delay={{ show: 250, hide: 400 }}
//             overlay={this.renderTooltip(props)}
//           >
//             <Form.Label as={Row} value={props} />
//           </OverlayTrigger>
//         );
//       };






//     render() {
//         return (
//             <div>

//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(FormFunctions)
