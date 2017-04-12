
import {
  loadSite,
} from '../actions';
import {
  LOAD_SITE,
} from '../constants';

describe('SitesView actions', () => {
  describe('LOAD_SITE Action', () => {
    it('has a type of LOAD_SITE', () => {
      const expected = {
        type: LOAD_SITE,
      };
      expect(loadSite()).toEqual(expected);
    });
  });
});
