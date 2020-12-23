export function drugs(state = {}, action) {
  switch (action.type) {
    case "FETCHING_DRUGS":
      return {loading: true};
    case "ADD_DRUGS":
      return action.drugs;
    default:
      return state;
  }
}
