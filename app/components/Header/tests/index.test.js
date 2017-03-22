import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import Header from '../index';
import messages from '../messages';

const renderedComponent = shallow(
  <Header />
);

describe('<Header />', () => {
  it('Expect to display a header message', () => {
    expect(renderedComponent.contains(<FormattedMessage {...messages.title} />)).toEqual(true);
  });
});
