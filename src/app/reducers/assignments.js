export const assignments = (
  state = {
    assignmentsArray: [],
  },
  action
) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        assignmentsArray: action.data.user.assignments,
      };
    case "FETCH_CLAIM_ADMISSION":
      return state;
    case "ADD_ASSIGNMENT":
      return {
        assignmentsArray: state.assignmentsArray.concat(action.assignment),
      };
    case "REMOVE_ASSIGNMENT":
      const newArray = state.assignmentsArray.filter((a) => {
        return a.id !== action.assignment.id;
      });

      return {
        assignmentsArray: newArray,
      };
    case "LOGOUT_USER":
      return {
        assignmentsArray: [],
    };

    default:
      return state;
  }
};
