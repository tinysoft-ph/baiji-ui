/*
 *
 * SitesView reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_SITE,
} from './constants';

const initialState = fromJS({});

function sitesViewReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SITE:
      return state;
    default:
      return state;
  }
}

export default sitesViewReducer;
