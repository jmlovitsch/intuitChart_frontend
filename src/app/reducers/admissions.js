export const admissions = (
  state = {
    array: [],
    currentAdmission: "",
  },
  action
) => {
  console.log(action);
  switch (action.type) {
    case "ADD_ALL_ADMISSIONS":
      console.log(action.admissions);
      return {
        array: action.admissions,
      };
    case "OPEN_ADD_PATIENT":
      console.log("ADMISSIONS", action);
      return state;
    case "SET_CURRENT_ADMISSION":
      return {
        ...state,
        currentAdmission: action.admission,
      };
    case "LOGOUT_USER":
      return {
        array: [],
        currentAdmission: "",
          };

    default:
      return state;
  }
};
