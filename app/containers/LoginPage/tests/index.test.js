import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import Input from 'components/Input';

import { submitLoginForm } from '../actions';
import { LoginPage, mapDispatchToProps } from '../index';
import messages from '../messages';

describe('<LoginPage />', () => {
  let renderedComponent = null;

  beforeAll(() => {
    renderedComponent = shallow(
      <LoginPage
        username="test"
        password="pass"
        submitForm={() => {}}
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
      />
    )).toEqual(true);
  });

  it('Expect to display submit button', () => {
    expect(renderedComponent.find('button[type="submit"]')).toHaveLength(1);
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
