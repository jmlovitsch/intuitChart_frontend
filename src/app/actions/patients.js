// export const openAddPatient = () => {
//   return {
//     type: "OPEN_ADD_PATIENT",
//   };
// };

export const handleBackfromAddPatient = () => {
  return {
    type: "ClOSE_ADD_PATIENT",
  };
};


export const openAddPatient = () => {
    return (dispatch) => {
      dispatch({ type: "FETCHING_ALL_ADMISSIONS" });
      fetch("http://localhost:3001/admissions", {
        method: "GET"
      })
        .then((response) => {
          return response.json();
        })
        .then((admissions) => {
          dispatch({ type: "OPEN_ADD_PATIENT", admissions });
        });
    };
  };
