
import {
  changeUsername,
  submitLoginForm,
} from '../actions';
import {
  CHANGE_USERNAME,
  SUBMIT_FORM,
} from '../constants';

describe('LoginPage actions', () => {
  describe('Submit Form Action', () => {
    it('has a type of SUBMIT_FORM and credentials object', () => {
      const username = 'test';
      const password = 'pass';
      const expected = {
        type: SUBMIT_FORM,
        credentials: {
          username,
          password,
        },
      };

      expect(submitLoginForm({ username, password })).toEqual(expected);
    });
  });

  describe('changeUsername', () => {
    it('should return the correct type and the passed username', () => {
      const fixture = 'test';
      const expectedResult = {
        type: CHANGE_USERNAME,
        username: fixture,
      };

      expect(changeUsername(fixture)).toEqual(expectedResult);
    });
  });
});
