
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
