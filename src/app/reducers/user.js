export function user(
  state = {
    employee_id: "",
    requesting: false,
  },
  action
) {
  console.log(action);
  switch (action.type) {
    case "CURRENT_USER":
      return {
        ...state,
        employee_id: action.employee_id,
      };
    case "LOGOUT_USER":
      return null;
    default:
      return state;
  }
}
