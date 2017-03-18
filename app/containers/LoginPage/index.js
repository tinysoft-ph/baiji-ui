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
import
makeSelectLoginPage,
{ makeSelectUsername,
  makeSelectPassword } from './selectors';
import messages from './messages';
import { submitLoginForm } from './actions';

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  handleSubmit(e) {
    const { submitForm, username, password } = this.props;

    if (e && e.preventDefault) {
      e.preventDefault();
    }

    submitForm({
      username,
      password,
    });
  }

  render() {
    const {
      username,
      password,
    } = this.props;

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
          <form
            onSubmit={(e) => this.handleSubmit(e)}
          >
            <div>
              <label htmlFor="inputEmail">Email</label>
              <div>
                <input
                  type="email"
                  id="inputEmail"
                  placeholder="Email"
                  value={username}
                />
              </div>
            </div>
            <div>
              <label htmlFor="inputPassword">Password</label>
              <div>
                <input
                  type="password"
                  id="inputPassword"
                  placeholder="Password"
                  value={password}
                />
              </div>
            </div>
            <div>
              <div>
                <button
                  type="submit"
                >Sign in</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  submitForm: PropTypes.func.isRequired,
  username: PropTypes.string,
  password: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  LoginPage: makeSelectLoginPage(),
  username: makeSelectUsername(),
  password: makeSelectPassword(),
});

export function mapDispatchToProps(dispatch) {
  return {
    submitForm: ({ username, password }) => { dispatch(submitLoginForm({ username, password })); },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
