export function auth(state = {}, action) {
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
      };
    case "CREATE_USER_LOADING":
      return { ...state, loading: true };
    default:
      return state;
  }
}
