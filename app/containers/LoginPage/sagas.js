import { take, call, put, select } from 'redux-saga/effects';

import { changeUsername, changeUsernameError } from './actions';

// Individual exports for testing
export function* getUsername() {
  const url = 'http://localhost:3000/username';

  try {
    const username = yield call(url, 'test');
    yield put(changeUsername(username));
  } catch (err) {
    yield put(changeUsernameError(err));
  }
}

// All sagas to be loaded
export default [
  getUsername,
];
