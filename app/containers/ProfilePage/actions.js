/*
 *
 * ProfilePage actions
 *
 */

import {
  LOAD_PROFILE,
  PROFILE_LOAD_SUCCESS,
  PROFILE_LOAD_FAILED,
} from './constants';

export function loadProfile(id) {
  return {
    type: LOAD_PROFILE,
    id,
  };
}

export function loadProfileSuccess(user) {
  return {
    type: PROFILE_LOAD_SUCCESS,
    user,
  };
}

export function loadProfileFailed(message) {
  return {
    type: PROFILE_LOAD_FAILED,
    message,
  };
}
