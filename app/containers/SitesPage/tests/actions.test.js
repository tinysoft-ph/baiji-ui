
import {
  loadSites,
  loadSitesSuccess,
  loadSitesFailed,
} from '../actions';

import {
  LOAD_SITES,
  LOAD_SITES_SUCCESS,
  LOAD_SITES_FAILED,
} from '../constants';

describe('SitesPage actions', () => {
  describe('Load Site Action', () => {
    it('has a type of LOAD_SITES', () => {
      const expected = {
        type: LOAD_SITES,
      };
      expect(loadSites()).toEqual(expected);
    });
  });

  describe('Load Site Success', () => {
    it('has a type of LOAD_SITES_SUCCESS', () => {
      const fixture = [
        { name: 'Site1' },
        { name: 'Site2' },
      ];
      const expected = {
        type: LOAD_SITES_SUCCESS,
        sites: fixture,
      };

      expect(loadSitesSuccess(fixture)).toEqual(expected);
    });
  });

  describe('Load Site Failed', () => {
    it('has a type of LOAD_SITES_FAILED', () => {
      const fixture = 'Error Message';
      const expected = {
        type: LOAD_SITES_FAILED,
        message: fixture,
      };
      expect(loadSitesFailed(fixture)).toEqual(expected);
    });
  });
});
