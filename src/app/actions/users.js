
export const currentUser= ({user}) => {
    return {
      type: 'CURRENT_USER',
      user
    }
  }

  export const logoutUser = () => {
    return {
      type: 'LOGOUT_USER',
    }
  }

  export const fetchAllUsers = (params) => {
    return (dispatch) => {
      dispatch({ type: 'FETCH_USER_SUCCESS'})
      fetch('http://localhost:3001/users', {
        method: "GET",
        headers: {
            Authorization: `Bearer ${params}`

        }})
      .then(response => {
        return response.json()
      })
      .then(console.log)
    //   .then(data => {
    //     dispatch({ type: 'USER_LOGIN', data });
    //   })
      }
  }
