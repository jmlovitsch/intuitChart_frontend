export const patients = (
  state = {
    loading: false,
    addPatient: false,
    patients: [],
    currentPatient: "",
  },
  action
) => {
  switch (action.type) {
    case "FETCHING_ALL_ADMISSIONS":
      return {
        ...state,
        loading: true,
      };
    case "OPEN_ADD_PATIENT":
      return {
        loading: false,
        addPatient: true,
      };
    case "ClOSE_ADD_PATIENT":
      return {
        ...state,
        addPatient: false,
      };
    case "FETCHING_ALL_PATIENTS":
      return {
        ...state,
        loading: true,
      };
    case "ALL_PATIENTS":
      return {
        ...state,
        patients: action.patients,
      };
    case "SET_CURRENT_PATIENT":
      return {
        ...state,
        currentPatient: action.patient,
      };
    default:
      return state;
  }
};
