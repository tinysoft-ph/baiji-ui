import { takeLatest, call, put } from 'redux-saga/effects';

import request from 'utils/request';

import {
  LOAD_SITE,
} from './constants';

import {
  loadSiteViewSuccess,
} from './actions';

export function* loadSiteView(id) {
  const url = `/site?id=${id}`;

  try {
    const view = yield call(request, url);
    yield put(loadSiteViewSuccess(view));
  } catch (err) {
    yield put(err.message);
  }
}

// Individual exports for testing
export function* getSiteView() {
  yield takeLatest(LOAD_SITE, loadSiteView);
}

// All sagas to be loaded
export default [
  getSiteView,
];
