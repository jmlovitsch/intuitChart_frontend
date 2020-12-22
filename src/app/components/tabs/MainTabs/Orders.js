import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { Switch } from "react-router-dom";
import  Consult  from "../Orders/Consult";
import  Diet  from "../Orders/Diet";
import  Imaging  from "../Orders/Imaging";
import  Labs  from "../Orders/Labs";
import Medications from "../Orders/Medications";
import  Nursing  from "../Orders/Nursing";
import  OrdersNavigator  from "../Orders/OrdersNavigator";

class Orders extends Component {
    render() {
        const {id} = this.props
        return (
            <Card className="child login-card">
            <Card.Header>
              <OrdersNavigator />
            </Card.Header>
            <Card.Body>
              <Switch>
                <Medications
                  path={`/dashboard/${id}/visits/visit_id/orders/medications`}
                />
                <Labs
                  exact
                  path={`/dashboard/${id}/visits/visit_id/orders/labs`}
                />
                <Nursing
                  exact
                  path={`/dashboard/${id}/visits/visit_id/orders/nursing`}
                />
                <Consult
                  exact
                  path={`/dashboard/${id}/visits/visit_id/orders/consult`}
                />
                <Imaging
                  exact
                  path={`/dashboard/${id}/visits/visit_id/orders/imaging`}
                />
                <Diet
                  exact
                  path={`/dashboard/${id}/visits/visit_id/orders/diet`}
                />
              </Switch>
            </Card.Body>
          </Card>
              )
    }
}

const mapStateToProps = (state) => ({
    id: state.user.id
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)

// const Orders = ({id}) => {
//   return (
//     <Card className="child login-card">
//       <Card.Header>
//         <OrdersNavigator />
//       </Card.Header>
//       <Card.Body>
//         <Switch>
//           <Medications
//             path={`/dashboard/${id}/visits/visit_id/orders/medications`}
//           />
//           <Labs
//             exact
//             path={`/dashboard/${id}/visits/visit_id/orders/labs`}
//           />
//           <Nursing
//             exact
//             path={`/dashboard/${id}/visits/visit_id/orders/nursing`}
//           />
//           <Consult
//             exact
//             path={`/dashboard/${id}/visits/visit_id/orders/consult`}
//           />
//           <Imaging
//             exact
//             path={`/dashboard/${id}/visits/visit_id/orders/imaging`}
//           />
//           <Diet
//             exact
//             path={`/dashboard/${id}/visits/visit_id/orders/diet`}
//           />
//         </Switch>
//       </Card.Body>
//     </Card>
//   );
// };

// const mapStateToProps = (state) => ({
//     id: state.user.id
// });

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Orders);
