
import { fromJS } from 'immutable';
import sitesViewReducer from '../reducer';

describe('sitesViewReducer', () => {
  it('returns the initial state', () => {
    expect(sitesViewReducer(undefined, {})).toEqual(fromJS({}));
  });
});
