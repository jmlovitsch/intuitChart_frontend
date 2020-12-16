export function vitals(
  state = {
    vitals: [],
    requesting: false,
  },
  action
) {
  switch (action.type) {
    case "START_ADDING_USERS_REQUEST":
      return {
        ...state,
        users: [...state.users],
        requesting: true,
      };

    case "ADD_USERS":
      return {
        ...state,
        users: action.users,
        requesting: false,
      };

    default:
      return state;
  }
}
