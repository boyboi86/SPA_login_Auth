import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERR } from './types';

//The server we created
const ROOT_URL = 'http://localhost:3000';

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
      .catch(function(){
        dispatch(authErr('Email or Password provided is invalid'))
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
