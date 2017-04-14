/*
 *
 * SitesPage actions
 *
 */

import {
  LOAD_SITES,
  LOAD_SITES_SUCCESS,
  LOAD_SITES_FAILED,
} from './constants';

export function loadSites() {
  return {
    type: LOAD_SITES,
  };
}

export function loadSitesSuccess(sites) {
  return {
    type: LOAD_SITES_SUCCESS,
    sites,
  };
}

export function loadSitesFailed(message) {
  return {
    type: LOAD_SITES_FAILED,
    message,
  };
}
