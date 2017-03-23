import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import Footer from '../index';
import messages from '../messages';

const renderedComponent = shallow(
  <Footer />
);

describe('<Footer />', () => {
  it('Expect to display a footer message', () => {
    expect(renderedComponent.contains(<FormattedMessage {...messages.footer} />)).toEqual(true);
  });
});
