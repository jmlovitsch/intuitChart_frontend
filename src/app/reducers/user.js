export function user(state = {
    loading: false
}, action) {
  console.log(action);
  switch (action.type) {
    case "USER_LOGIN_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "USER_LOGIN":
      const user = {...action.data.user}
      console.log(user)
      return {
          ...state,
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
            loading: true
        }
    case "CURRENT_USER":
      return {
        ...action.data.user,
        loading: false
      };
    case "LOGOUT_USER":
      return {
        id: "",
      };
    default:
      return state;
  }
}
