
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
      .then(data => {
          console.log(data)
        dispatch({ type: 'EMPLOYEES_LIST', data });
      })
      }
  }
  export const fetchAllEmployees = (token, id) => {
    return (dispatch) => {
      dispatch({ type: 'FETCH_USER_SUCCESS'})
      fetch(`http://localhost:3001/users/${id}/medical_group`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
      }})
      .then(response => {
        return response.json()
      })
      .then(data => {
          console.log(data)
        dispatch({ type: 'EMPLOYEES_LIST', data });
      })
      }
  }
