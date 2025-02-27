export const fetchCreateMain = (token, urlname, bodyObj) => {
    return (dispatch) => {
      dispatch({ type: "FETCHING_CREATE_MAIN" });
      fetch(`http://localhost:3001/${urlname}`, {
        method: "POST",
        headers: {
          Authoization: `Bearer ${token}`,
          "Content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(bodyObj),
      })
      .then((response) => {
          return response.json();
        })
        .then((updatedAdmission) => {
          console.log(updatedAdmission)
          return dispatch({ type: "UPDATE_CURRENT_ADMISSION", updatedAdmission })
        });
    };
  };
