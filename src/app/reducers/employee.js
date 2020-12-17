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
      case "REMOVE_DELETED_EMPLOYEE_FROM_LIST":
          return {
              employeeList: state.employeeList.map(em=> em.id !== action.data.id)
          }
    default:
      return state;
  }
}
