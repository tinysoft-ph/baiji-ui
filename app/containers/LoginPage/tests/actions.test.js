
import {
  submitLoginForm,
} from '../actions';
import {
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
});
