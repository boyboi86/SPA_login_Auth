import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  handleFormSubmit(formProps){
    this.props.signupUser(formProps);
  }

  renderAlert(){
    if(this.props.errMsg){
      return(
        <div className="alert alert-danger">
          { this.props.errMsg }
        </div>
      )
    }
  }

  render(){

    const { handleSubmit, fields: {email, password, password_confirm}} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
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
        { this.renderAlert() }
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

function mapStateToProps(state){
  return { errMsg: state.auth.error };
}

const formOption = {form: 'signup', fields: ['email', 'password', 'password_confirm'], validate}

export default reduxForm(formOption, mapStateToProps, actions)(Signup);
