export const loginSuccess = (data) => {
    return {
      type: 'USER_LOGIN',
      data
    }
  }

  export const currentUser = (data) => {
    return {
      type: 'CURRENT_USER',
      data
    }
  }

// export const loginSuccess = (params ) => {
//   return (dispatch) => {
//     dispatch({ type: "USER_LOGIN_LOADING" });
//     fetch("http://localhost:3001/auth", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({ user: params }),
//     })
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {console.log(data);
//         localStorage.setItem("my_app_token", data.jwt);
//         this.props.history.push(`/dashboard/${this.props.id}`)
//         dispatch({ type: "USER_LOGIN", data });
//       });
//   };
// };

export const createUserSuccess = (params) => {
  return (dispatch) => {
    dispatch({ type: "CREATE_USER_LOADING" });
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user: params }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({ type: "USER_CREATED", data });
      });
  };
};

// export const fetchWithToken = (params) => {
//   return (dispatch) => {
//     dispatch({ type: "CURRENT_USER_LOADING" });
//     fetch("http://localhost:3001/current_user", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${params}`,
//       },
//     })
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         localStorage.setItem("my_app_token", data.jwt);
//         dispatch({ type: "CURRENT_USER", data });
//       });
//   };
// };
