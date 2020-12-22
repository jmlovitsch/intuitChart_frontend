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
        loading: true,
      };

    case "ADD_DRUGS":
      return {
        ...state,
        drugs: action.drugs,
        loading: false,
      };
    default:
      return state;
  }
}
