
import { fromJS } from 'immutable';
import profilePageReducer from '../reducer';

import {
  LOAD_PROFILE,
  PROFILE_LOADED,
} from '../constants';

describe('profilePageReducer', () => {
  it('returns the initial state', () => {
    const fixture = {
      isLoading: true,
    };
    expect(profilePageReducer(undefined, {}))
      .toEqual(fromJS(fixture));
  });

  describe('isLoading', () => {
    it('set the loading to true when profile load request', () => {
      const fixture = {
        isLoading: true,
      };
      expect(profilePageReducer(undefined, { type: LOAD_PROFILE }))
        .toEqual(fromJS(fixture));
    });

    it('set the loading to false when load request has finished', () => {
      const fixture = {
        isLoading: false,
      };
      expect(profilePageReducer(undefined, { type: PROFILE_LOADED }))
        .toEqual(fromJS(fixture));
    });
  });
});
