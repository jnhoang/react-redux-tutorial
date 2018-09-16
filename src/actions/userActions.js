import axios from 'axios'

export function fetchUser() {
  // redux reducer return structure
  let reduxResponse = {
    type     : '',
    payload  : {}
  };
  
  return function(dispatch) {
    dispatch({type: 'FETCH_USER'})
    axios
    .get('https://randomuser.me/api/?results=2')
    .then((response) => {
      console.log('res: ', response)
      console.log('data:', response.data)

      dispatch({type: "FETCH_USER_FULFILLED", payload: response.data.results})
    })
    .catch((err) => {
      dispatch({type: "FETCH_USER_REJECTED", payload: err})
    })

  }
}

export function setUserName(name) {
  return {
    type      : 'SET_USER_NAME',
    payload   : name,
  }
}

export function setUserAge(age) {
  return {
    type      : 'SET_USER_AGE',
    payload   : age,
  }
}
