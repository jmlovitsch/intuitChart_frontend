export const employee = (state = {
    message: "",
    employeeList: []
}, action) => {
  switch (action.type) {
    case "EMPLOYEES_LIST":
      const employeeArray = action.data;
      return {
        ...state,
        employeeList: employeeArray,
      };
    case "USER_CREATED":
      return {
          ...state,
        employeeList: state.employeeList.concat(action.data.user),
      };
    case "REMOVE_DELETED_EMPLOYEE_FROM_LIST":
      return {
          message: action.data.message,
        employeeList: state.employeeList.filter((em) => em.id !== parseInt(action.id,10) ),
      };
    case "EMPLOYEE_UPDATED":
      const updatedEmployee = action.data;
      return {
        ...state,
        employeeList: state.employeeList.map((em) =>  em.id !== updatedEmployee.id ? em : updatedEmployee),
      };
      case "CLEAR_EMPLOYEE_MESSAGES":
          return {
              ...state,
              message: "",

          }
    default:
      return state;
  }
};
