import React from 'react';
import { shallow, mount } from 'enzyme';

import { App } from '../index';

describe('<App />', () => {
  beforeEach(() => {
    global.sessionStorage = jest.fn();
    global.sessionStorage.getItem = jest.fn();
    global.sessionStorage.removeItem = jest.fn();
  });

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
    const loadUserFromToken = jest.fn();
    global.sessionStorage.getItem.mockReturnValue('tokenString');
    mount((
      <App loadUserFromToken={loadUserFromToken} />
    ));

    expect(loadUserFromToken).toHaveBeenCalled();
  });

  it('should not call remote token load on empty session', () => {
    const loadUserFromToken = jest.fn();
    const setLoggedInStatus = jest.fn();
    global.sessionStorage.getItem.mockReturnValue(null);
    mount((
      <App loadUserFromToken={loadUserFromToken} dispatchNotLoggedInStatus={setLoggedInStatus} />
    ));
    expect(loadUserFromToken).toHaveBeenCalledTimes(0);
  });

  it('should dispatch notLoggedIn status', () => {
    const setLoggedInStatus = jest.fn();
    const loadUserFromToken = jest.fn();
    global.sessionStorage.getItem.mockReturnValue(null);
    mount((
      <App dispatchNotLoggedInStatus={setLoggedInStatus} loadUserFromToken={loadUserFromToken} />
    ));

    expect(setLoggedInStatus).toHaveBeenCalled();
  });

  it('should dispatch load user action on token found', () => {
    const fixture = 'token';
    const setLoggedInStatus = jest.fn();
    const tokenRefresh = jest.fn();
    global.sessionStorage.getItem.mockReturnValue(fixture);
    mount((
      <App dispatchNotLoggedInStatus={setLoggedInStatus} loadUserFromToken={tokenRefresh} />
    ));
    expect(setLoggedInStatus).toHaveBeenCalledTimes(0);
    expect(tokenRefresh).toHaveBeenCalledWith(fixture);
  });

  it('should navigateTo url when loggingIn', () => {
    const navigateTo = jest.fn();
    const redirectUrl = '/redirectUrl';
    const renderedComponent = shallow(
      <App
        isLoggedIn={false}
        dispatchNavigateTo={navigateTo}
        redirectUrl={redirectUrl}
        dispatchNotLoggedInStatus={jest.fn()}
      />,
      { lifecycleExperimental: true }
    );

    renderedComponent.setProps({ isLoggedIn: true });

    expect(navigateTo).toHaveBeenCalledWith(redirectUrl);
  });

  it('should remove jwtToken when loggingOut', () => {
    const renderedComponent = shallow(
      <App
        isLoggedIn
        dispatchNotLoggedInStatus={jest.fn()}
      />,
      { lifecycleExperimental: true }
    );

    renderedComponent.setProps({ isLoggedIn: false });

    expect(global.sessionStorage.removeItem).toHaveBeenCalledWith('jwtToken');
  });
});
