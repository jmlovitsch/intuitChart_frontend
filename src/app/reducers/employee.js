export function employee(
  state = {
    employeeList: []
  },
  action
) {
  console.log(action);
  switch (action.type) {
    case "EMPLOYEES_LIST":
      return {
        employeeList: action.data,
      };
    default:
      return state;
  }
}
