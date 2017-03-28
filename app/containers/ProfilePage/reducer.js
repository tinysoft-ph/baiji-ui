/*
 *
 * ProfilePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_PROFILE,
  PROFILE_LOAD_SUCCESS,
  PROFILE_LOAD_FAILED,
} from './constants';

const initialState = fromJS({
  isLoading: true,
});

function profilePageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PROFILE:
      return state.set('isLoading', true);
    case PROFILE_LOAD_SUCCESS:
      return state.set('isLoading', false);
    case PROFILE_LOAD_FAILED:
      return state.set('isLoading', false);
    default:
      return state;
  }
}

export default profilePageReducer;
