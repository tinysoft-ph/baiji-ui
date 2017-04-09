/**
 * Test  sagas
 */

/* eslint-disable redux-saga/yield-effects */
// import { take, call, put, select } from 'redux-saga/effects';
import { put } from 'redux-saga/effects';

import {
  loadSitesSaga,
} from '../sagas';

import {
  loadSitesSuccess,
  loadSitesFailed,
} from '../actions';

describe('loadSites Saga', () => {
  let loadSitesGenerator;

  beforeEach(() => {
    loadSitesGenerator = loadSitesSaga();
    // TODO: Add test
    const testCall = loadSitesGenerator.next().value;
    expect(testCall).toMatchSnapshot();
  });

  describe('OnSuccess', () => {
    it('should dispatch success action on success', () => {
      const fixture = [{
        id: 1,
      }];

      const callDescriptor = loadSitesGenerator.next(fixture).value;
      expect(callDescriptor).toEqual(put(loadSitesSuccess(fixture)));
    });
  });

  describe('OnFailed', () => {
    it('should dispatch failed on failure', () => {
      const fixture = {
        message: 'Error message',
      };

      const callDescriptor = loadSitesGenerator.throw(fixture).value;
      expect(callDescriptor).toEqual(put(loadSitesFailed(fixture.message)));
    });
  });
});
