
export function createAssignment(token, bodyObj) {
    console.log("bodyObj", bodyObj);
    return (dispatch) => {
      dispatch({ type: "FETCH_CLAIM_ADMISSION" });
      fetch("http://localhost:3001/assignments", {
        method: "POST",
        headers: {
          Authoization: `Bearer ${token}`,
          "Content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ assignment: bodyObj }),
      })
        .then((response) => response.json())
        .then((assignment) => dispatch({ type: "ADD_ASSIGNMENT", assignment }));
    };
  }



export const fetchRemoveAssignment = (token, assignment, admission) => {
    return (dispatch) => {
        console.log("FETCH", assignment)
      dispatch({ type: "FETCHING_REMOVE_ASSIGNMENT" });
      fetch(`http://localhost:3001/assignments/${assignment.id}`, {
        method: "DELETE",
        headers: {
            Authoization: `Bearer ${token}`,
        }
      })
        .then(response => response.json()
        )
        .then((data) => dispatch({ type: "REMOVE_ASSIGNMENT",data,assignment }))
    }
}
