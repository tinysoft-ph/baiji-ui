import { fromJS } from 'immutable';
import makeSelectSitesPage from '../selectors';

const selector = makeSelectSitesPage();

describe('makeSelectSitesPage', () => {
  it('should select sites page state', () => {
    const sitesState = fromJS({
      sites: {},
    });
    const mockedState = fromJS({
      sites: sitesState,
    });

    expect(selector(mockedState)).toEqual(sitesState);
  });
});
