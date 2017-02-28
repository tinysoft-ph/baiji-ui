import { createSelector } from 'reselect';

/**
 * Direct selector to the sitesPage state domain
 */
const selectSitesPageDomain = () => (state) => state.get('sitesPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SitesPage
 */

const makeSelectSitesPage = () => createSelector(
  selectSitesPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSitesPage;
export {
  selectSitesPageDomain,
};
