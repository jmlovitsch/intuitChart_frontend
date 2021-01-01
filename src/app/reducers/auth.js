export function auth(
  state = {
    loading: false,
  },
  action
) {
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
      };
    case "CREATE_USER_LOADING":
      return { ...state, loading: true };
    //   case "USER_UPDATED":
    //     if(!!action.data.error){
    //   return {
    //     errorMessage: action.data.error,
    //     loading: false,
    //   }};

    case "LOGOUT_USER":
      return {
        loading: false,
      };

    default:
      return state;
  }
}
