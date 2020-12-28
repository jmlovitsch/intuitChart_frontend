export function admissions(state = {}, action) {
    console.log(action)
    switch (action.type) {
      case "OPEN_ADD_PATIENT":
        return {
          ...action.admissions,
        };

      default:
        return state;
    }
  }
