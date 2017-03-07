import { fromJS } from 'immutable';

import appReducer from '../reducer';

import {
  setLoggedInStatus,
} from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      isLoggedIn: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });
});
