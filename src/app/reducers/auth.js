export function auth(
  state = {

  },
  action
) {
  console.log(action);
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state
      };
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
