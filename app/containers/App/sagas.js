import { call, put, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';

import {
  ME_FROM_TOKEN,
} from './constants';

import {
  meRequestFailed,
  meRequestSuccess,
  setLoggedInStatus,
} from './actions';

export function* getMeFromToken(action) {
  const url = `/me?token=${action.token}`;

  try {
    const me = yield call(request, url);
    // save new token to session storage
    sessionStorage.setItem('jwtToken', me.token);
    yield put(meRequestSuccess(me));
    yield put(setLoggedInStatus(true));
  } catch (err) {
    // delete token from session storage
    sessionStorage.removeItem('jwtToken');
    yield put(meRequestFailed(err.message));
    yield put(setLoggedInStatus(false));
  }
}

function* meData() {
  yield takeLatest(ME_FROM_TOKEN, getMeFromToken);
}

export default [
  meData,
];
