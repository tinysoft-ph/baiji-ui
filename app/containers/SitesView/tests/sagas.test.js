/**
 * Test  sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { take, call, put, select } from 'redux-saga/effects';
import { loadSiteView } from '../sagas';

import {
  loadSiteViewSuccess,
} from '../actions';

describe('loadSiteView Saga', () => {
  let loadSiteViewGenerator;

  beforeEach(() => {
    loadSiteViewGenerator = loadSiteView({
      id: '1234-abcd',
    });
    const testCall = loadSiteViewGenerator.next().value;

    expect(testCall).toMatchSnapshot();
  });

  it('should dispatch loadSiteViewSuccess action', () => {
    const fixture = {
      siteName: 'test-site',
    };

    const callDescriptor = loadSiteViewGenerator.next(fixture).value;
    expect(callDescriptor).toEqual(put(loadSiteViewSuccess(fixture)));
  });
});
