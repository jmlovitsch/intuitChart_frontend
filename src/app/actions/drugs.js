
export const fetchAllDrugs = (params) => {
    return (dispatch) => {
      dispatch({ type: "FETCHING_DRUGS" });
      fetch("http://localhost:3001/drugs", {
        method: "GET"
      })
        .then((response) => {
          return response.json();
        })
        .then((drugs) => {
          dispatch({ type: "ADD_DRUGS", drugs });
        });
    };
  };

  export const createPrescription = (token, bodyObj) => {
    return (dispatch) => {
      dispatch({ type: "FETCHING_CREATE_PRESCRIPTION" });
      fetch("http://localhost:3001/rxes", {
        method: "POST",
        headers: {
            Authoization: `Bearer ${token}`,
            'Content-type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(bodyObj)
      })
        .then((response) => {
          return response.json();
        })
        .then(prescription => console.log(prescription));
    };
  };
