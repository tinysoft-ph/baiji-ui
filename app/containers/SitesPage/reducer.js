/*
 *
 * SitesPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_SITES,
  LOAD_SITES_SUCCESS,
  LOAD_SITES_FAILED,
} from './constants';

const initialState = fromJS({
  isLoading: true,
  sites: [],
});

function sitesPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SITES:
      return state.set('isLoading', false);
    case LOAD_SITES_SUCCESS:
      return state.set('sites', action.sites)
              .set('isLoading', false);
    case LOAD_SITES_FAILED:
      return state.set('isLoading', false);
    default:
      return state;
  }
}

export default sitesPageReducer;
