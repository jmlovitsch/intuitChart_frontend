// export const openAddPatient = () => {
//   return {
//     type: "OPEN_ADD_PATIENT",
//   };
// };

export const setRecords = (records) => {
    return {
        type: "RECORDS", records
    }
}
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


  export const fetchAllPatients = () => {
    return (dispatch) => {
      dispatch({ type: "FETCHING_ALL_PATIENTS" });
      fetch("http://localhost:3001/patients", {
        method: "GET"
      })
        .then((response) => {
          return response.json();
        })
        .then((patients) => {
          dispatch({ type: "ALL_PATIENTS", patients });
        });
    };
  };

  export const setCurrentPatient = (patient) => {
    return {
      type: 'SET_CURRENT_PATIENT',
      patient
    }
  }
