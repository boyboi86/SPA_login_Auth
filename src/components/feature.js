import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component{
  componentWillMount(){
      this.props.fetchMsg();
  }

  render(){
    return(
      <div>{ this.props.msg }</div>
    )
  }
}

function mapStateToProps(state){
  return { msg: state.auth.msg }
}

export default connect(mapStateToProps, actions)(Feature);
