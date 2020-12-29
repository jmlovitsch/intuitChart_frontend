export const admissions = (state = {}, action) => {
  switch (action.type) {
    case "OPEN_ADD_PATIENT":
      console.log("ADMISSIONS", action);
      return action.admissions;

    default:
      return state;
  }
};
