import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import Footer from 'components/Footer';
import Header from 'components/Header';

import HomePage from '../index';
import messages from '../messages';

describe('<HomePage />', () => {
  let renderedComponent = null;

  beforeAll(() => {
    renderedComponent = shallow(
      <HomePage />
    );
  });

  it('should render the page message', () => {
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.header} />
    )).toEqual(true);
  });

  it('should render the <Header />', () => {
    expect(renderedComponent.contains(<Header />)).toEqual(true);
  });

  it('should render the <Footer />', () => {
    expect(renderedComponent.contains(<Footer />)).toEqual(true);
  });
});
