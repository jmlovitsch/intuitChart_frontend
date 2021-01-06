export const careplans = (
    state = {
      array: [],
      patientCareplan: ""
    },
    action
  ) => {
    switch (action.type) {
      case "ADD_ALL_CAREPLANS":
        return {
            ...state,
          array: action.careplans,
        };
        case "ADD_ADMISSION_CAREPLAN":
          return {
              ...state,
            patientCareplan: action.careplan,
          };
        //   case "USER_LOGIN":
        //     const user = { ...action.data.user };
        //     return {
        //       loading: false,
        //       ...user,
        //     };

      default:
        return state;
    }
  };
