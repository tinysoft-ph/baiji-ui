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
import { submitLoginForm } from './actions';

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { submitForm } = this.props;

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
                <button
                  onSubmit={submitForm}
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
};

const mapStateToProps = createStructuredSelector({
  LoginPage: makeSelectLoginPage(),
});

export function mapDispatchToProps(dispatch) {
  return {
    submitForm: () => { dispatch(submitLoginForm()); },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
