import React from 'react';
import { shallow, mount } from 'enzyme';
import { browserHistory } from 'react-router';

import { EnsureLoggedIn } from '../index';

import { setRedirectURL } from '../actions';

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

  describe('redirectUrl', () => {
    it('Should redirect when not loggedIn', () => {
      const isLoggedIn = false;
      const dispatch = jest.fn();
      const historySpy = jest.spyOn(browserHistory, 'replace').mockImplementation(() => true);
      mount(
        <EnsureLoggedIn isLoggedIn={isLoggedIn} dispatch={dispatch} currentURL="#/test" />
      );
      expect(dispatch).toHaveBeenCalledWith(setRedirectURL('#/test'));
      historySpy.mockRestore();
    });
  });
});
