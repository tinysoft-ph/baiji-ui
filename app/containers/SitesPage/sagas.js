import { takeLatest, call, put } from 'redux-saga/effects';

import request from 'utils/request';

import {
  LOAD_SITES,
} from './constants';

import {
  loadSitesSuccess,
  loadSitesFailed,
} from './actions';

// Individual exports for testing
export function* loadSitesSaga() {
  const url = '/sites';

  try {
    const sites = yield call(request, url);
    yield put(loadSitesSuccess(sites));
  } catch (err) {
    yield put(loadSitesFailed(err.message));
  }
}

export function* getSites() {
  yield takeLatest(LOAD_SITES, loadSitesSaga);
}

// All sagas to be loaded
export default [
  getSites,
];
