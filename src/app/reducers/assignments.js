export const assignments = (state = {}, action) => {
  switch (action.type) {
    case "":
      console.log("ASSIGNMENTS REDUCER", action);
      return action;
    default:
      return state;
  }
};
