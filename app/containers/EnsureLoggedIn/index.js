/*
 *
 * EnsureLoggedIn
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import {
  setRedirectURL,
} from './actions';

export class EnsureLoggedIn extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { dispatch, currentURL } = this.props;

    if (!this.props.isLoggedIn) {
      dispatch(setRedirectURL(currentURL));
      browserHistory.replace('/login');
    }
  }

  render() {
    if (this.props.isLoggedIn) {
      return this.props.children;
    }

    return null;
  }
}

EnsureLoggedIn.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currentURL: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  children: PropTypes.node,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

function mapStateToProps(state) {
  return {
    currentURL: state.get('currentURL'),
    isLoggedIn: state.get('isLoggedIn'),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EnsureLoggedIn);
