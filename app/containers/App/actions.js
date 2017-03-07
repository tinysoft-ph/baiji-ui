
import {
  NAVIGATE_TO,
  ME_FROM_TOKEN,
  SET_LOGGED_IN_STATUS,
} from './constants';


export function navigateTo(url) {
  return {
    type: NAVIGATE_TO,
    url,
  };
}

export function meFromToken(token) {
  return {
    type: ME_FROM_TOKEN,
    token,
  };
}

export function setLoggedInStatus(status) {
  return {
    type: SET_LOGGED_IN_STATUS,
    status,
  };
}
