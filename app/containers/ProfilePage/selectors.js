import { createSelector } from 'reselect';

/**
 * Direct selector to the profilePage state domain
 */
const selectProfilePageDomain = () => (state) => state.get('profile');

/**
 * Other specific selectors
 */
const makeSelectProfile = () => createSelector(
   selectProfilePageDomain(),
   (profilePageState) => profilePageState.get('profile')
 );


/**
 * Default selector used by ProfilePage
 */

const makeSelectProfilePage = () => createSelector(
  selectProfilePageDomain(),
  (substate) => substate
);

export default makeSelectProfilePage;
export {
  selectProfilePageDomain,
};
