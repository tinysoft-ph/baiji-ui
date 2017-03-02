/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { navigateTo, meFromToken } from './actions';

export class App extends React.Component {

  componentDidMount() {
    this.props.loadUserFromToken();
  }

  componentDidUpdate(prevProps) {
    const { redirectUrl } = this.props;
    const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn;
    const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn;

    if (isLoggingIn) {
      this.props.dispatchNavigateTo(redirectUrl);
    } else if (isLoggingOut) {
      // do any kind of cleanup or post-logout redirection here
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  redirectUrl: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  dispatchNavigateTo: PropTypes.func,
  loadUserFromToken: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatchNavigateTo: (url) => dispatch(navigateTo(url)),
    loadUserFromToken: () => {
      const token = sessionStorage.getItem('jwtToken');
      if (!token || token === '') {
        return;
      }

      dispatch(meFromToken(token));
    },
  };
}

function mapStateToProps(state) {
  return {
    redirectUrl: state.get('redirectURL'),
    isLoggedIn: state.get('isLoggedIn'),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
