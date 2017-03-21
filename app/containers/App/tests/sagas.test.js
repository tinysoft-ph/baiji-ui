import { put } from 'redux-saga/effects';

import {
  meRequestSuccess,
  meRequestFailed,
  setLoggedInStatus,
} from '../actions';

import {
  getMeFromToken,
} from '../sagas';

describe('Request Me From Token Saga', () => {
  let getMeFromTokenGenerator;

  beforeEach(() => {
    global.sessionStorage = jest.fn();
    global.sessionStorage.setItem = jest.fn();
    global.sessionStorage.removeItem = jest.fn();

    getMeFromTokenGenerator = getMeFromToken({
      token: 'exampletoken',
    });
    const testCall = getMeFromTokenGenerator.next().value;

    expect(testCall).toMatchSnapshot();
  });

  describe('OnSuccess', () => {
    it('should dispatch meRequestSuccess on success', () => {
      const fixture = {
        username: 'testusername',
      };

      const callDescriptor = getMeFromTokenGenerator.next(fixture).value;
      expect(callDescriptor).toEqual(put(meRequestSuccess(fixture)));
    });

    it('should set jwtToken in sessionStorage', () => {
      const fixture = {
        username: 'testusername',
        token: 'token',
      };

      getMeFromTokenGenerator.next(fixture);
      expect(global.sessionStorage.setItem).toHaveBeenCalledWith('jwtToken', fixture.token);
    });

    it('should dispatch setLoggedInStatus on success', () => {
      const fixture = {
        username: 'testusername',
      };

      getMeFromTokenGenerator.next(fixture);
      const callDescriptor = getMeFromTokenGenerator.next().value;
      expect(callDescriptor).toEqual(put(setLoggedInStatus(true)));
    });
  });

  describe('OnFail', () => {
    it('should dispatch meRequestFailed on failure', () => {
      const fixture = {
        message: 'message',
      };

      const callDescriptor = getMeFromTokenGenerator.throw(fixture).value;
      expect(callDescriptor).toEqual(put(meRequestFailed(fixture.message)));
    });

    it('should remove jwtToken', () => {
      const fixture = {
        message: 'message',
      };

      getMeFromTokenGenerator.throw(fixture);
      expect(global.sessionStorage.removeItem).toHaveBeenCalledWith('jwtToken');
    });

    it('should dispatch setLoggedInStatus on fail', () => {
      const fixture = {
        username: 'testusername',
      };

      getMeFromTokenGenerator.throw(fixture);
      const callDescriptor = getMeFromTokenGenerator.next().value;
      expect(callDescriptor).toEqual(put(setLoggedInStatus(false)));
    });
  });
});
