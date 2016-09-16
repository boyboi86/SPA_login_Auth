import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER } from './types';

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
        //redirect /features
        browserHistory.push('/features');
      })
      .catch(function(){

      })
  }
}
