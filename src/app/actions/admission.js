export function fetchUsers() {
  return (dispatch) => {
    dispatch({ type: "START_ADDING_ADMISSIONS_REQUEST" });
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((users) => dispatch({ type: "ADD_ADMISSIONS", users }));
  };
}

export const fetchAllAdmissions = () => {
    return (dispatch) => {
      dispatch({ type: "FETCHING_ALL_ADMISSIONS" });
      fetch("http://localhost:3001/admissions", {
        method: "GET"
      })
        .then((response) => {
          return response.json();
        })
        .then((admissions) => {
          dispatch({ type: "ADD_ALL_ADMISSIONS", admissions });
        });
    };
  };
  export const setCurrentAdmission = (admission) => {
    return {
      type: 'SET_CURRENT_ADMISSION',
      admission
    }
  }
