export const user = (
  state = {
    loading: false,
  },
  action
) => {
  switch (action.type) {
    case "USER_LOGIN_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "USER_LOGIN":
      const user = { ...action.data.user };
      return {
        loading: false,
        ...user,
      };
    case "USER_CREATED":
      return {
        ...state,
        createdUser: action.data.user,
      };
    case "CURRENT_USER_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "CURRENT_USER":
      return {
        ...action.data.user,
        loading: false,
      };
    case "FETCH_USER_UPDATE":
      return {
        ...state,
        loading: true,
      };
    case "USER_UPDATED":

      return {
        ...action.data,
        loading: false,
      };
    case "LOGOUT_USER":
      return { id: "" };
    // case "ADD_ASSIGNMENT_TO_USER":
    //   console.log("USER REDUCER", action.assignment);
    //   return {
    //     ...state,
    //     assignments: state.assignments.concat([action.assignment]),
    //   };
    //   case "REMOVE_ASSIGNMENT":
    //     console.log("REMOVE ASSIGNMENT", action.admission_id);
    //       return{
    //           ...state,
    //           admissions: state.admissions.filter(a => {return a.id !== action.id })
    //       }
    default:
      return state;
  }
};
