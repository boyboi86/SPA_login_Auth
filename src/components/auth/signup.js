import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  handleSubmit(formProps){
    this.props.signupUser(formProps);
  }

  render(){

    const { handleSubmit, fields: {email, password, password_confirm}} = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email: </label>
          <input type="email" className="form-control" { ...email } />
          { email.touched && email.error && <div className="error">{ email.error }</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Password: </label>
          <input type="password" className="form-control" { ...password } />
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password: </label>
          <input type="password" className="form-control" { ...password_confirm } />
          { password.touched && password_confirm.error && <div className="error">{ password_confirm.error }</div>}
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign up</button>
      </form>
    )
  }
}
function validate(formProps){
  const error = {}
  if(!formProps.email){
    error.email = 'Please provide email';
  }

  if (formProps.password !== formProps.password_confirm || typeof (formProps.password || formProps.password_confirm) === 'undefined'){
    error.password_confirm = 'Password must match';
  }
  return error;
}

const formOption = {form: 'signup', fields: ['email', 'password', 'password_confirm'], validate}

export default reduxForm(formOption, null, actions)(Signup);
