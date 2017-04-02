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

import Footer from 'components/Footer';
import Header from 'components/Header';
import Button from 'components/Button';
import Form from 'components/Form';
import Input from 'components/Input';

import
makeSelectLoginPage,
{ makeSelectUsername,
  makeSelectPassword } from './selectors';
import messages from './messages';
import {
  changeUsername,
  changePassword,
  submitLoginForm,
} from './actions';

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
      onChangeUsername,
      onChangePassword,
    } = this.props;

    return (
      <div>
        <Helmet
          title="LoginPage"
          meta={[
            { name: 'description', content: 'Baiji Login' },
          ]}
        />
        <Header />
        <FormattedMessage {...messages.header} />
        <Form
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <div>
            <label htmlFor="inputEmail">Email</label>
            <div>
              <Input
                type="email"
                id="inputEmail"
                placeholder="Email"
                value={username}
                onChange={onChangeUsername}
              />
            </div>
          </div>
          <div>
            <label htmlFor="inputPassword">Password</label>
            <div>
              <Input
                type="password"
                id="inputPassword"
                placeholder="Password"
                value={password}
                onChange={onChangePassword}
              />
            </div>
          </div>
          <div>
            <div>
              <Button
                type="submit"
              >Sign in</Button>
            </div>
          </div>
        </Form>
        <Footer />
      </div>
    );
  }
}

LoginPage.propTypes = {
  submitForm: PropTypes.func.isRequired,
  username: PropTypes.string,
  password: PropTypes.string,
  onChangeUsername: PropTypes.func,
  onChangePassword: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  LoginPage: makeSelectLoginPage(),
  username: makeSelectUsername(),
  password: makeSelectPassword(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => { dispatch(changeUsername(evt.target.value)); },
    onChangePassword: (evt) => { dispatch(changePassword(evt.target.value)); },
    submitForm: ({ username, password }) => { dispatch(submitLoginForm({ username, password })); },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
