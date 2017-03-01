import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import { LoginPage } from '../index';
import messages from '../messages';

describe('<LoginPage />', () => {
  it('Expect to display header message for intl', () => {
    const renderedComponent = shallow(
      <LoginPage />
    );

    expect(renderedComponent.contains(<FormattedMessage {...messages.header} />)).toEqual(true);
  });

  it('Expect to display input for email', () => {
    const renderedComponent = shallow(
      <LoginPage />
    );

    expect(renderedComponent.find('input#inputEmail[type="email"]')).toHaveLength(1);
  });

  it('Expect to display input for password', () => {
    const renderedComponent = shallow(
      <LoginPage />
    );

    expect(renderedComponent.find('input#inputPassword[type="password"]')).toHaveLength(1);
  });

  it('Expect to display submit button', () => {
    const renderedComponent = shallow(
      <LoginPage />
    );

    expect(renderedComponent.find('button[type="submit"]')).toHaveLength(1);
  });
});
