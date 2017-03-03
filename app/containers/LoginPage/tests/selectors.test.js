import { fromJS } from 'immutable';
import { selectLoginPageDomain } from '../selectors';

// const selector = makeSelectLoginPageDomain();

describe('selectLoginPageDomain', () => {
  it('should select the login state', () => {
    const loginState = fromJS({
      credentials: {},
    });
    const mockedState = fromJS({
      login: loginState,
    });

    expect(selectLoginPageDomain()(mockedState)).toEqual(loginState);
  });
});
