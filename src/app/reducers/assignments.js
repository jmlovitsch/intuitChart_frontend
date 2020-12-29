export const assignments = (state = {

}, action) => {
  console.log("ASSIGNMENTS REDUCER", action);
  switch (action.type) {
      case "FETCH_ASSIGNMENTS":
          return action.assignments
    case "ADD_ASSIGNMENT":
      return action.assignment;
    default:
      return state;
  }
};
