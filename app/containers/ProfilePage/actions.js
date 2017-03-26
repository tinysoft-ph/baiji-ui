/*
 *
 * ProfilePage actions
 *
 */

import {
  LOAD_PROFILE,
  PROFILE_LOADED,
  PROFILE_LOAD_FAILED,
} from './constants';

export function loadProfile() {
  return {
    type: LOAD_PROFILE,
  };
}

export function loadProfileSuccess(user) {
  return {
    type: PROFILE_LOADED,
    user,
  };
}

export function loadProfileFailed(message) {
  return {
    type: PROFILE_LOAD_FAILED,
    message,
  };
}
