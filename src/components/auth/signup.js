import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  render(){

    const { handleSubmit, fields: {email, password, password_confirm}} = this.props;

    return (
      <form>
        <fieldset className="form-group">
          <label>Email: </label>
          <input type="email" className="form-control" { ...email } />
        </fieldset>
        <fieldset className="form-group">
          <label>Password: </label>
          <input type="password" className="form-control" { ...password } />
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password: </label>
          <input type="password" className="form-control" { ...password_confirm } />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign up</button>
      </form>
    )
  }
}
const formOption = {form: 'signup', fields: ['email', 'password', 'password_confirm']}

export default reduxForm(formOption, null, actions)(Signup);
