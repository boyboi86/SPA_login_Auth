import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class Signout extends Component {
  componentWillMount(){
    this.props.signoutUser();
  }
  render(){
    return (
      <div>See you soon...</div>
    )
  }
}

export default connect(null, actions)(Signout);
