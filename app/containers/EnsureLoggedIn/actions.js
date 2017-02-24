

import {
  SET_REDIRECT_URL,
} from './constants';

export function setRedirectURL(url) {
  return {
    type: SET_REDIRECT_URL,
    url,
  };
}
