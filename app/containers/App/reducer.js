import { fromJS } from 'immutable';

import {
  SET_LOGGED_IN_STATUS,
} from './constants';

const initialState = fromJS({
  isLoggedIn: false,
});

function appReducer(state = initialState, action) {
  console.log('State: ', state, action);
  switch (action.type) {
    case SET_LOGGED_IN_STATUS:
      return state.set('isLoggedIn', action.status);
    default:
      return state;
  }
}

export default appReducer;
