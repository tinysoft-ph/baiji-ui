import React from 'react';
import { shallow, mount } from 'enzyme';

import { App } from '../index';

describe('<App />', () => {
  it('should render its children', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = shallow(
      <App>
        {children}
      </App>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });

  it('should call get token on refresh', () => {
    const tokenRefresh = jest.fn();
    mount((
      <App loadUserFromToken={tokenRefresh} />
    ));

    expect(tokenRefresh).toHaveBeenCalled();
  });
});
