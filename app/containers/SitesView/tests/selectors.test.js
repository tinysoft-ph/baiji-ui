import { fromJS } from 'immutable';
import makeSelectSitesView from '../selectors';

const selector = makeSelectSitesView();

describe('makeSelectSitesViewDomain', () => {
  it('should select sitesView state', () => {
    const sitesViewState = fromJS({
      sitesView: {},
    });
    const mockedState = fromJS({
      sitesView: sitesViewState,
    });

    expect(selector(mockedState)).toEqual(sitesViewState);
  });
});
