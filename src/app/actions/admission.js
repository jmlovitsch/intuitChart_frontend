export function fetchUsers() {
  return (dispatch) => {
    dispatch({ type: "START_ADDING_ADMISSIONS_REQUEST" });
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((users) => dispatch({ type: "ADD_ADMISSIONS", users }));
  };
}

export function createAssignment(token, bodyObj) {
  console.log("BODY", bodyObj);
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
