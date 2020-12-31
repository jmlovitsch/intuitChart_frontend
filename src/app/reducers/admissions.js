export const admissions = (
  state = {
    array: [],
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
    default:
      return state;
  }
};
