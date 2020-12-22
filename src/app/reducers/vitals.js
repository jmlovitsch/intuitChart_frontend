export function vitals(
  state = {
    vitals: [],
    requesting: false,
  },
  action
) {
  switch (action.type) {
    case "ADD_VITALS_LOADING":
      return {
        ...state,
        users: [...state.users],
        requesting: true,
      };

    case "ADD_VITALS":
      return {
        ...state,
        users: action.users,
        requesting: false,
      };

    default:
      return state;
  }
}
