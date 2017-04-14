import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import { SitesPage } from '../index';
import messages from '../messages';

describe('<SitesPage />', () => {
  it('Expect to display header message for intl', () => {
    const dispatch = jest.fn();
    const renderedComponent = shallow(
      <SitesPage
        dispatch={dispatch}
      ></SitesPage>
    );

    expect(renderedComponent
      .contains(<FormattedMessage {...messages.header} />)).toEqual(true);
  });
});
