/*
 *
 * LoginPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectLoginPage from './selectors';
import messages from './messages';

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="LoginPage"
          meta={[
            { name: 'description', content: 'Baiji Login' },
          ]}
        />
        <FormattedMessage {...messages.header} />
        <div>
          <form>
            <div>
              <label htmlFor="inputEmail">Email</label>
              <div>
                <input type="email" id="inputEmail" placeholder="Email" />
              </div>
            </div>
            <div>
              <label htmlFor="inputPassword">Password</label>
              <div>
                <input type="password" id="inputPassword" placeholder="Password" />
              </div>
            </div>
            <div>
              <div>
                <button type="submit">Sign in</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  LoginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
