import { createSelector } from 'reselect';

/**
 * Direct selector to the sitesPage state domain
 */
const selectSitesPageDomain = () => (state) => state.get('sites');

/**
 * Other specific selectors
 */
const makeSelectSites = () => createSelector(
   selectSitesPageDomain(),
   (sitePageState) => sitePageState.get('sites')
 );


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
  makeSelectSites,
};
