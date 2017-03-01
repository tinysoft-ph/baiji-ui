import React from 'react';
import { shallow } from 'enzyme';

import { EnsureLoggedIn } from '../index';

describe('<EnsureLoggedIn />', () => {
  it('Show children when logged in', () => {
    const isLoggedIn = true;
    const renderedComponent = shallow(
      <EnsureLoggedIn isLoggedIn={isLoggedIn}>
        <span>I am a child</span>
      </EnsureLoggedIn>
    );

    expect(renderedComponent.contains((<span>I am a child</span>))).toEqual(true);
  });

  it('Should show null when not logged in', () => {
    const isLoggedIn = false;
    const renderedComponent = shallow(
      <EnsureLoggedIn isLoggedIn={isLoggedIn}>
        <span>I am a child</span>
      </EnsureLoggedIn>
    );

    expect(renderedComponent.get(0)).toEqual(null);
  });
});
