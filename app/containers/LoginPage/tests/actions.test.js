
import {
  submitLoginForm,
} from '../actions';
import {
  SUBMIT_FORM,
} from '../constants';

describe('LoginPage actions', () => {
  describe('Submit Form Action', () => {
    it('has a type of SUBMIT_FORM', () => {
      const expected = {
        type: SUBMIT_FORM,
      };
      expect(submitLoginForm()).toEqual(expected);
    });
  });
});
