
import {
  ME_FROM_TOKEN,
  NAVIGATE_TO,
} from '../constants';

import {
  meFromToken,
  navigateTo,
} from '../actions';

describe('App Actions', () => {
  describe('meFromToken', () => {
    it('should return the correct type and the token', () => {
      const fixture = 'tokenmesample';
      const expectedResult = {
        type: ME_FROM_TOKEN,
        token: fixture,
      };

      expect(meFromToken(fixture)).toEqual(expectedResult);
    });
  });

  describe('navigateTo', () => {
    it('should return the correct type and the url', () => {
      const fixture = '/host';
      const expectedResult = {
        type: NAVIGATE_TO,
        url: fixture,
      };

      expect(navigateTo(fixture)).toEqual(expectedResult);
    });
  });
});
