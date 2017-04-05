/**
 * Test  sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { put } from 'redux-saga/effects';
// import { defaultSaga } from '../sagas';

import {
  loadProfileSaga,
} from '../sagas';

import {
  loadProfileSuccess,
  loadProfileFailed,
} from '../actions';

describe('loadProfile Saga', () => {
  let loadProfileGenerator;

  beforeEach(() => {
    loadProfileGenerator = loadProfileSaga({
      id: 'something',
    });

    const testCall = loadProfileGenerator.next().value;
    expect(testCall).toMatchSnapshot();
  });

  describe('OnSuccess', () => {
    it('should dispatch loadProfile action on success', () => {
      const fixture = {
        username: 'testusername',
      };

      const callDescriptor = loadProfileGenerator.next(fixture).value;
      expect(callDescriptor).toEqual(put(loadProfileSuccess(fixture)));
    });
  });

  describe('OnFailed', () => {
    it('should dispatch loadProfile failed on failure', () => {
      const fixture = {
        message: 'Error message',
      };

      const callDescriptor = loadProfileGenerator.throw(fixture).value;
      expect(callDescriptor).toEqual(put(loadProfileFailed(fixture.message)));
    });
  });
});
