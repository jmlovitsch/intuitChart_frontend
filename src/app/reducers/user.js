export function user(
  state = {
    id: "",
  },
  action
) {
  console.log(action);
  switch (action.type) {
    case "USER_LOGIN":
        if(action.data === "Invalid username or password"){
            return{
                message: "Invalid username or password"
            }
        } else {
            const user = { ...action.data.user };
              localStorage.setItem("my_app_token", action.data.jwt)
            return {
              loading: false,
              ...user,
            };
        }
    case "USER_CREATED":
      return {
        ...state,
        createdUser: action.data.user
      };
    case "LOGOUT_USER":
      return {
        id: "",
      };
    default:
      return state;
  }
}
