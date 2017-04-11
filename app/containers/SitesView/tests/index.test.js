import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import { SitesView } from '../index';
import messages from '../messages';

describe('<SitesView />', () => {
  it('Expect to display header message for intl', () => {
    const onLoad = jest.fn();
    const renderedComponent = shallow(
      <SitesView
        onLoad={onLoad}
      />
    );
    expect(renderedComponent.contains(<FormattedMessage {...messages.header} />)).toEqual(true);
  });
});
