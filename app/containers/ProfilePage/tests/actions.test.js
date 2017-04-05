
import {
  loadProfile,
  loadProfileSuccess,
  loadProfileFailed,
} from '../actions';
import {
  LOAD_PROFILE,
  PROFILE_LOAD_SUCCESS,
  PROFILE_LOAD_FAILED,
} from '../constants';

describe('ProfilePage actions', () => {
  describe('LOAD_PROFILE Action', () => {
    it('has a type of LOAD_PROFILE', () => {
      const fixture = 'thisid';
      const expected = {
        type: LOAD_PROFILE,
        id: fixture,
      };
      expect(loadProfile(fixture)).toEqual(expected);
    });
  });

  describe('PROFILE_LOADED Action', () => {
    it('has a type of PROFILE_LOADED', () => {
      const fixture = {
        name: 'username',
      };
      const expected = {
        type: PROFILE_LOAD_SUCCESS,
        user: fixture,
      };

      expect(loadProfileSuccess(fixture)).toEqual(expected);
    });
  });

  describe('PROFILE_LOAD_FAILED Action', () => {
    it('has a type of PROFILE_LOAD_FAILED', () => {
      const fixture = 'message';
      const expected = {
        type: PROFILE_LOAD_FAILED,
        message: fixture,
      };

      expect(loadProfileFailed(fixture)).toEqual(expected);
    });
  });
});
