export function user(
  state = {
    id: "",
  },
  action
) {
  console.log(action);
  switch (action.type) {
    case "USER_LOGIN":
      const user = { ...action.data.user };
        localStorage.setItem("my_app_token", action.data.jwt)
      return {
        loading: false,
        ...user,
      };

    // case "CURRENT_USER":
    //   return {
    //     ...state
    //   };
    case "LOGOUT_USER":
      return {
        id: "",
      };
    default:
      return state;
  }
}
