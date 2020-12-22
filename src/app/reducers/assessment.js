export function assessment(state = {}, action) {
  switch (action.type) {
    case "START_ADDING_USERS_REQUEST":
      return {
        ...state,
        users: [...state.users],
     };

    case "ADD_USERS":
      return {
        ...state,
        users: action.users,
      };

    default:
      return state;
  }
}
