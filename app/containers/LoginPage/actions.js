/*
 *
 * LoginPage actions
 *
 */

import {
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SUBMIT_FORM,
} from './constants';

export function submitLoginForm({ username, password }) {
  return {
    type: SUBMIT_FORM,
    credentials: {
      username,
      password,
    },
  };
}

export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}

export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}

export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    data,
  };
}

export function loginFailed(error) {
  return {
    type: LOGIN_FAILED,
    error,
  };
}
