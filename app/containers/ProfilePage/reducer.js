/*
 *
 * ProfilePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_PROFILE,
  PROFILE_LOADED,
  PROFILE_LOADED_FAILED,
} from './constants';

const initialState = fromJS({
  isLoading: true,
});

function profilePageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PROFILE:
      return state.set('isLoading', true);
    case PROFILE_LOADED:
      return state.set('isLoading', false);
    case PROFILE_LOADED_FAILED:
      return state.set('isLoading', false);
    default:
      return state;
  }
}

export default profilePageReducer;
