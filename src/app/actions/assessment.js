export const fetchCreateAssessment = (token, urlname, bodyObj) => {
console.log(token, urlname, bodyObj)
  return (dispatch) => {
    dispatch({ type: "FETCHING_CREATE_ASSESSMENT" });
    fetch(`http://localhost:3001/${urlname}`, {
      method: "POST",
      headers: {
        Authoization: `Bearer ${token}`,
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify( bodyObj ),
    })
      .then((response) => {
        return response.json();
      })
      .then(console.log)
  };
};
