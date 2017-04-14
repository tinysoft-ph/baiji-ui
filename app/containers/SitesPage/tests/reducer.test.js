
import { fromJS } from 'immutable';
import sitesPageReducer from '../reducer';

describe('sitesPageReducer', () => {
  it('returns the initial state', () => {
    const fixture = {
      isLoading: true,
      sites: [],
    };
    expect(sitesPageReducer(undefined, {}))
      .toEqual(fromJS(fixture));
  });
});
