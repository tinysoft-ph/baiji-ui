import React from 'react';
import { shallow } from 'enzyme';

import { LoginPage } from '../index';
import messages from '../messages';

describe('<LoginPage />', () => {
  it('Expect to display header message for intl', () => {
    const loginHeader = messages.header.defaultMessage;
    const renderedComponent = shallow(
      <LoginPage>
        {loginHeader}
      </LoginPage>
    );

    expect(renderedComponent.contains(loginHeader)).toEqual(true);
  });
});
