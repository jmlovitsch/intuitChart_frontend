export function drug(
  state = {
    drugs: [],
    requesting: false,
  },
  action
) {
  switch (action.type) {
    case "FETCHING_DRUGS":
      return {
        ...state,
        requesting: true,
      };

    case "ADD_DRUGS":
      return {
        ...state,
        drugs: action.drugs,
        requesting: false,
      };
    default:
      return state;
  }
}
