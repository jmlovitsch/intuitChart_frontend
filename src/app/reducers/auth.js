export function auth(
  state = {
    user: "",
    jwt: "",
    loading: false,
    username: "",
    password: "",
  },
  action
) {
  console.log(action);
  switch (action.type) {
    case "CREATE_USER":
        return {

        }
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        loading: true,
      };
    case "USER_LOGIN":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
