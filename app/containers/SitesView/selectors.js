import { createSelector } from 'reselect';

/**
 * Direct selector to the sitesView state domain
 */
const selectSitesViewDomain = () => (state) => state.get('sitesView');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SitesView
 */

const makeSelectSitesView = () => createSelector(
  selectSitesViewDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSitesView;
export {
  selectSitesViewDomain,
};
