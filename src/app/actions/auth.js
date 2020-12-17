

export const loginSuccess = (params) => {
    return (dispatch) => {
      dispatch({ type: 'FETCH_USER_SUCCESS'})
      fetch('http://localhost:3001/auth', {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ user: params }),
      })
      .then(response => {
        return response.json()
      })
      .then(data => {
        dispatch({ type: 'USER_LOGIN', data });
      })
    }
  }

  export const createUserSuccess = (params) => {
    return (dispatch) => {
      dispatch({ type: 'FETCH_USER_SUCCESS'})
      fetch('http://localhost:3001/users', {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ user: params }),
      })
      .then(response => {
        return response.json()
      })
      .then(console.log)
    //   .then(data => {
    //     dispatch({ type: 'USER_LOGIN', data });
    //   })
    }
  }

  export const fetchWithToken = (params) => {
    return (dispatch) => {
      dispatch({ type: 'FETCH_USER_SUCCESS'})
      fetch('http://localhost:3001/users/profile', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${params}`
        }
      })
      .then(response => {
        return response.json()
      })
      .then(data => {
        dispatch({ type: 'USER_LOGIN', data });
      })
    }
  }
