import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import { LoginPage, mapDispatchToProps } from '../index';
import messages from '../messages';

describe('<LoginPage />', () => {
  let renderedComponent = null;

  beforeAll(() => {
    renderedComponent = shallow(
      <LoginPage submitForm={() => {}} />
    );
  });

  it('Expect to display header message for intl', () => {
    expect(renderedComponent.contains(<FormattedMessage {...messages.header} />)).toEqual(true);
  });

  it('Expect to display input for email', () => {
    expect(renderedComponent.find('input#inputEmail[type="email"]')).toHaveLength(1);
  });

  it('Expect to display input for password', () => {
    expect(renderedComponent.find('input#inputPassword[type="password"]')).toHaveLength(1);
  });

  it('Expect to display submit button', () => {
    expect(renderedComponent.find('button[type="submit"]')).toHaveLength(1);
  });

  describe('on form submit', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);

      expect(result.submitForm).toBeDefined();
    });
  });
});
