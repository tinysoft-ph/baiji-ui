
import {
  NAVIGATE_TO,
} from './constants';


export function navigateTo(url) {
  return {
    type: NAVIGATE_TO,
    url,
  };
}
