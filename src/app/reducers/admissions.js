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
          ...state,
        array: action.admissions,
      };
    case "OPEN_ADD_PATIENT":
      console.log("ADMISSIONS", action);
      return state;
    case "SET_CURRENT_ADMISSION":
        console.log(action)
      return {
        ...state,
        currentAdmission: action.admission,
      };
      case "UPDATE_CURRENT_ADMISSION":
          return {
              ...state,
              currentAdmission: action.updatedAdmission.admission
          }
          case "RECORDS":
              console.log(action)
              return {
                  ...state,
                  array: action.records
              }
    case "LOGOUT_USER":
      return {
        array: [],
        currentAdmission: "",
          };

    default:
      return state;
  }
};
