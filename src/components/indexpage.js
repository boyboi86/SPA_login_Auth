import React, { Component } from 'react';

class Indexpage extends Component{
  render(){
    return(
      <div className="container-fluid alert alert-success">A basic app that allows you to
        <div className="alert alert-info">
          <ul>
            <li>Sign in</li>
            <li>Sign out</li>
            <li>Sign up</li>
          </ul>
        </div>
        <div className="alert alert-warning">
          <h4 className="alert-heading">Some simple instructions</h4>
            <p>Once you sign in/ sign up you will have access to feature which is a protected route</p>
            <p className="m-b-0">BUT! Once you sign out, feature will not be available to you</p>
        </div>
      </div>
    )
  }
}

export default Indexpage;
