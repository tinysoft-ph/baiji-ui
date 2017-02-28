
import { fromJS } from 'immutable';
import sitesPageReducer from '../reducer';

describe('sitesPageReducer', () => {
  it('returns the initial state', () => {
    expect(sitesPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
