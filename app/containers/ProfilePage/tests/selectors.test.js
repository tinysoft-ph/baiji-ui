import { fromJS } from 'immutable';
import makeSelectProfilePage
from '../selectors';

const selector = makeSelectProfilePage();


describe('makeSelectProfilePage', () => {
  it('should select profile page state', () => {
    const profileState = fromJS({
      profile: {},
    });
    const mockedState = fromJS({
      profile: profileState,
    });

    expect(selector(mockedState)).toEqual(profileState);
  });
});
