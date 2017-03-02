/*
 *
 * LoginPage actions
 *
 */

import {
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
