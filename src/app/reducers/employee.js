export const employee = (state = {
    employeeList: []
}, action) => {
  switch (action.type) {
    case "EMPLOYEES_LIST":
      const employeeArray = action.data;
      return {
        employeeList: employeeArray,
      };
    case "USER_CREATED":
      return {
        employeeList: state.employeeList.concat(action.data.user),
      };
    case "REMOVE_DELETED_EMPLOYEE_FROM_LIST":
      return {
        employeeList: state.employeeList.filter((em) => em.id !== action.id),
      };
    case "EMPLOYEE_UPDATED":
      const updatedEmployee = action.data;
      return {
        employeeList: state.employeeList.map((em) =>  em.id !== updatedEmployee.id ? em : updatedEmployee),
      };
    default:
      return state;
  }
};
