

export const fetchRemoveAssignment = (token, id) => {
    return (dispatch) => {
      dispatch({ type: "FETCHING_REMOVE_ASSIGNMENT" });
      fetch(`http://localhost:3001/assignments/${id}`, {
        method: "DELETE",
        headers: {
            Authoization: `Bearer ${token}`,
        }
      })
        .then(response => response.json()
        )
        .then(console.log)
    }
}
