import { AUTH_USER, UNAUTH_USER, AUTH_ERR } from '../actions/types';

export default function(state = {}, action){
  switch(action.type){
    case AUTH_USER:
      return { ...state, error: '', authenticate: true};
    case UNAUTH_USER:
      return { ...state, authenticate: false };
    case AUTH_ERR:
      return { ...state, error: action.payload }
  }
  return state;
}
