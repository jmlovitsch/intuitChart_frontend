export const fetchAllCareplans = (params) => {
    return (dispatch) => {
      dispatch({ type: "FETCHING_CAREPLANS" });
      fetch("http://localhost:3001/diagnosis_categories", {
        method: "GET",
        headers: {
            "Content-type": 'application/json',
            Accept: 'application/json'
        }
      })
        .then((response) => response.json())
        .then(
            (careplans) => {
          dispatch({ type: "ADD_ALL_CAREPLANS", careplans });
        }
        );
    };
  };
  export const fetchCreateCarePlan = (token, careplan) => {

      careplan.care_plan.acs = careplan.care_plan.acs.join("-/-")
      careplan.care_plan.ocs = careplan.care_plan.ocs.join("-/-")
      console.log(careplan)
    return (dispatch) => {
      dispatch({ type: "FETCHING_CREATE_CAREPLANS" });
      fetch("http://localhost:3001/care_plans", {
        method: "POST",
        headers: {
            Authoization: `Bearer ${token}`,
            "Content-type": 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(careplan)
      })
        .then((response) => response.json())
        .then(

            (careplan) => {
                dispatch({ type: "ADD_ADMISSION_CAREPLAN", careplan });
        }
        );
    };
  };
