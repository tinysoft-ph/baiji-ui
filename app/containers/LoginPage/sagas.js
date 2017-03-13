import { take, takeLatest, call, put, select } from 'redux-saga/effects';

import request from 'utils/request';
import {
  changeUsername,
  changeUsernameError,
  loginSuccess,
  loginFailed,
} from './actions';
import {
  makeSelectUsername,
  makeSelectPassword,
} from './selectors';

// Individual exports for testing
export function* getUsername() {
  const url = 'http://localhost:3000/username';

  try {
    const username = yield call(request, url);
    yield put(changeUsername(username));
  } catch (err) {
    yield put(changeUsernameError(err));
  }
}

export function* submitLoginForm() {
  const username = select(makeSelectUsername()); // get from selector
  const password = select(makeSelectPassword()); // get from selector
  const url = 'http://localhost';

  try {
    const loginData = yield call(request, url, { username, password });
    yield put(loginSuccess(loginData));
  } catch (err) {
    yield put(loginFailed(err));
  }
}

export function* submitLoginTriggered() {
  yield takeLatest(SUBMIT_FORM, submitLoginForm);
}

// All sagas to be loaded
export default [
  submitLoginTriggered,
];
