import axios from 'axios';

//The server we created
const ROOT_URL = 'http://localhost:3000';

export function signinUser({ email, password }){
  return function(dispatch){
    //Submit email/password to server
    axios.post(`${ROOT_URL}/signin`, { email, password });
    //If info is correct, update state to indicate authentication complete
    //save JWT
    //redirect /features

    //If info is incorrect, show error
  }
}
