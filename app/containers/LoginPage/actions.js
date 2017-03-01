/*
 *
 * LoginPage actions
 *
 */

import {
  SUBMIT_FORM,
} from './constants';

export function submitLoginForm() {
  return {
    type: SUBMIT_FORM,
  };
}
