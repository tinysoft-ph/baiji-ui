import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import { ProfilePage } from '../index';
import messages from '../messages';

describe('<ProfilePage />', () => {
  it('Expect to display header message from intl', () => {
    const mock = jest.fn();
    const renderedComponent = shallow(
      <ProfilePage
        onLoadProfile={mock}
        onSaveProfile={mock}
      ></ProfilePage>
    );
    expect(renderedComponent
      .contains(<FormattedMessage {...messages.header} />)).toEqual(true);
  });
});
