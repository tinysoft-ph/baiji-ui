/*
 *
 * ProfilePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_PROFILE,
} from './constants';

const initialState = fromJS({
  isLoading: true,
});

function profilePageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PROFILE:
      return state.set('isLoading', true);
    default:
      return state;
  }
}

export default profilePageReducer;
