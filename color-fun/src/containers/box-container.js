import React, { Component } from 'react';
import Box from '../components/box.js'
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index.js';


class BoxContainer extends Component {
  render() {
    return (
      <Box color = {this.props.color}></Box>
    );
  }
}

const mapStateToProps=(state)=>{
  return state;
}

export default connect (mapStateToProps, actionCreators)(BoxContainer)
