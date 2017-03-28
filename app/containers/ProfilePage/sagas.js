import { takeLatest, call, put } from 'redux-saga/effects';

import request from 'utils/request';

import {
  LOAD_PROFILE,
} from './constants';

import {
  loadProfileSuccess,
  loadProfileFailed,
} from './actions';

export function* loadProfileSaga(action) {
  const url = `/profile?id=${action.id}`;

  try {
    const profile = yield call(request, url);
    yield put(loadProfileSuccess(profile));
  } catch (err) {
    yield put(loadProfileFailed(err.message));
  }
}

// Individual exports for testing
export function* getProfile() {
  yield takeLatest(LOAD_PROFILE, loadProfileSaga);
}

// All sagas to be loaded
export default [
  getProfile,
];
