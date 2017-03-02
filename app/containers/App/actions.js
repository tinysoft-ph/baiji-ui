
import {
  NAVIGATE_TO,
  ME_FROM_TOKEN,
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
