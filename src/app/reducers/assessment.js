export function assessment(
  state = {
    users: [],
  },
  action
) {
  switch (action.type) {
    case "START_ADDING_USERS_REQUEST":
      return {
        users: [...state.users],
      };

    case "ADD_USERS":
      return {
        users: action.users,
      };
    case "LOGOUT_USER":
      return {
        users: [],
      };

    default:
      return state;
  }
}
