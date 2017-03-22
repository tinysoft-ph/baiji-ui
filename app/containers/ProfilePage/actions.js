/*
 *
 * ProfilePage actions
 *
 */

import {
  LOAD_PROFILE,
} from './constants';

export function loadProfile() {
  return {
    type: LOAD_PROFILE,
  };
}
