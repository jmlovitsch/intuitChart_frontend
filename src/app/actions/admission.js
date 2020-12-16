
export function fetchUsers() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_ADMISSIONS_REQUEST' });
      fetch('http://localhost:3001/users')
        .then(response => response.json())
        .then(users => dispatch({ type: 'ADD_ADMISSIONS', users }));
    };
  }
