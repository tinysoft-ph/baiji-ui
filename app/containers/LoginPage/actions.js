/*
 *
 * LoginPage actions
 *
 */

import {
  CHANGE_USERNAME,
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
