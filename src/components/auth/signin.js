import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component{
  handleFormSubmit({ email, password }){
    this.props.signinUser({ email, password });
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
    const { handleSubmit, fields: { email, password }} = this.props;

    return(
      <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
        <fieldset className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" placeholder="whats your email?" { ...email }/>
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" placeholder="Enter your password" { ...password }/>
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    )
  }
}

function mapStateToProps(state){
  return { errMsg: state.auth.error };
}

export default reduxForm({ form: 'signin', fields: ['email', 'password']}, mapStateToProps, actions )(Signin)
