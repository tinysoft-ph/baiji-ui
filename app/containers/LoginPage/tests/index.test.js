import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import Button from 'components/Button';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Input from 'components/Input';

import { changeUsername, changePassword, submitLoginForm } from '../actions';
import { LoginPage, mapDispatchToProps } from '../index';
import messages from '../messages';

describe('<LoginPage />', () => {
  let renderedComponent = null;

  const onChange = jest.fn();

  beforeAll(() => {
    renderedComponent = shallow(
      <LoginPage
        username="test"
        password="pass"
        submitForm={() => {}}
        onChangeUsername={onChange}
        onChangePassword={onChange}
      />
    );
  });

  it('Expect to display header message for intl', () => {
    expect(renderedComponent.contains(<FormattedMessage {...messages.header} />)).toEqual(true);
  });

  it('Expect to display input for email', () => {
    const type = 'email';
    expect(renderedComponent.contains(
      <Input
        type={type}
        id="inputEmail"
        placeholder="Email"
        value="test"
        onChange={onChange}
      />
    )).toEqual(true);
  });

  it('Expect to display input for password', () => {
    const type = 'password';
    expect(renderedComponent.contains(
      <Input
        type={type}
        id="inputPassword"
        placeholder="Password"
        value="pass"
        onChange={onChange}
      />
    )).toEqual(true);
  });

  it('should render the <Header />', () => {
    expect(renderedComponent.contains(<Header />)).toEqual(true);
  });

  it('should render the <Footer />', () => {
    expect(renderedComponent.contains(<Footer />)).toEqual(true);
  });

  it('should render the <Button /> with "Sign in" text', () => {
    expect(renderedComponent.contains(
      <Button type="submit">
        Sign in
      </Button>
    )).toEqual(true);
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeUsername', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeUsername).toBeDefined();
      });

      it('should dispatch changeUsername when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const username = 'test';
        result.onChangeUsername({ target: { value: username } });
        expect(dispatch).toHaveBeenCalledWith(changeUsername(username));
      });
    });

    describe('onChangePassword', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangePassword).toBeDefined();
      });

      it('should dispatch changePassword when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const password = 'pass';
        result.onChangePassword({ target: { value: password } });
        expect(dispatch).toHaveBeenCalledWith(changePassword(password));
      });
    });
  });

  describe('simulate events', () => {
    it('should call submitForm on form submit', () => {
      const submitFormDispatch = jest.fn();
      const wrapper = shallow(
        <LoginPage
          submitForm={submitFormDispatch}
          username="test"
          password="pass"
        />
      );
      const fixture = {
        username: 'test',
        password: 'pass',
      };

      wrapper.find('form').simulate('submit');
      expect(submitFormDispatch).toHaveBeenCalledWith(fixture);
    });
  });

  describe('on form submit', () => {
    let dispatch = null;
    let result = null;

    beforeAll(() => {
      dispatch = jest.fn();
      result = mapDispatchToProps(dispatch);
    });

    it('should be injected', () => {
      expect(result.submitForm).toBeDefined();
    });

    it('should dispatch submitLoginForm with credentials of the user', () => {
      const credentials = {
        username: 'test',
        password: 'pass',
      };

      result.submitForm(credentials);

      expect(dispatch).toHaveBeenCalledWith(submitLoginForm(credentials));
    });
  });
});
