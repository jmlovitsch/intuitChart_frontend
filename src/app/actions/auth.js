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


export const createUserSuccess = (params) => {
    console.log(params)
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
      .then((response) =>  response.json())
      .then((data) => (console.log(data), dispatch({ type: "USER_CREATED", data }))
      );
  };
};
