import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import XPbar from './xpPresenter';

function mapStateToProps(state) {
  const xp = state.user.xp;
  return {
    xp,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     onPlay: bindActionCreators(actions.sampleAction, dispatch),
//   };
// }

export default connect(mapStateToProps)(XPbar);