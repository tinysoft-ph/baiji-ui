
import {
  loadProfile,
} from '../actions';
import {
  LOAD_PROFILE,
} from '../constants';

describe('ProfilePage actions', () => {
  describe('LOAD_PROFILE Action', () => {
    it('has a type of LOAD_PROFILE', () => {
      const expected = {
        type: LOAD_PROFILE,
      };
      expect(loadProfile()()).toEqual(expected);
    });
  });
});
