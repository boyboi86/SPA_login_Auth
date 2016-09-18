import { AUTH_USER, UNAUTH_USER, AUTH_ERR, FETCH_MSG } from '../actions/types';

export default function(state = {}, action){
  switch(action.type){
    case AUTH_USER:
      return { ...state, error: '', authenticate: true};
    case UNAUTH_USER:
      return { ...state, authenticate: false };
    case AUTH_ERR:
      return { ...state, error: action.payload }
    case FETCH_MSG:
    return { ...state, msg: action.payload }
  }
  return state;
}
