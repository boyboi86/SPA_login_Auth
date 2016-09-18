import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERR, FETCH_MSG } from './types';

//The server we created if you choose NOT to use the heroku API comment the below
const ROOT_URL = 'https://ancient-chamber-86125.herokuapp.com';
//If you use the API in your local machine uncomment the below
// const ROOT_URL = 'http://localhost:3000';

export function signinUser({ email, password }){
  return function(dispatch){
    //Submit email/password to server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then( res => {
        //If info is correct, update state to indicate authentication complete
        dispatch({ type: AUTH_USER});
        //save JWT
        localStorage.setItem('token', res.data.token);
        //redirect /feature
        browserHistory.push('/feature');
      })
      .catch(res => {
        dispatch(authErr('Email or Password provided is invalid'))
      })
  }
}

export function signupUser({ email, password}){
  return function(dispatch){
    axios.post(`${ROOT_URL}/signup`, { email, password })
    .then( res =>{
      dispatch({ type: AUTH_USER });
      localStorage.setItem('token', res.data.token);
      browserHistory.push('/feature');
    })
    .catch(res => {
      dispatch(authErr('Email is in used'))
    })
  }
}

export function authErr(error){
  return {
    type: AUTH_ERR,
    payload: error
  }
}

export function signoutUser(){
  localStorage.removeItem('token');
  return {
    type: UNAUTH_USER
  }
}

/*Token has to be included in secured routes in API*/
export function fetchMsg() {
  return function(dispatch){
    axios.get(ROOT_URL, { headers: { 'authorization': localStorage.getItem('token') }})
    .then(res => {
      dispatch({
        type: FETCH_MSG,
        payload: res.data.message
      })
    })
    // .catch(res => {
    //
    // })
  }
}
