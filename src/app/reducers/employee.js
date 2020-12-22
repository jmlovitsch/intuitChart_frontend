export function employee(
  state = {
    employeeList: [],
  },
  action
) {
  switch (action.type) {
    case "EMPLOYEES_LIST":
      return {
        employeeList: action.data,
      };
    case "REMOVE_DELETED_EMPLOYEE_FROM_LIST":
      return {
        employeeList: state.employeeList.map((em) => em.id !== action.id),
      };
    case "EMPLOYEE_UPDATED":
      const updatedEmployee = action.data;
      return {
        employeeList: state.employeeList.map((em) =>
          em.id !== updatedEmployee.id ? em : updatedEmployee
        ),
      };
    default:
      return state;
  }
}
