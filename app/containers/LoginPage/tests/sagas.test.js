/**
 * Test  sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { take, call, put, select } from 'redux-saga/effects';
import { loginSuccess } from '../actions';
import { getUsername, submitLoginForm } from '../sagas';

// const generator = defaultSaga();

// describe('getUsername Saga', () => {
//   it('should dispatch the changeUsername action if it requests the data successfully', () => {
//     const response = {
//       username: 'test',
//     };
//     const putDescriptor = getReposGenerator.next(reponse).value;
//
//     expect(putDescriptor).toEqual(put(usernameLoaded(username)));
//   });
// });

describe('submitLoginForm Saga', () => {
  it('should dispatch the loginSuccess action it request returns successfully', () => {
    const callDescriptor = submitLoginForm().next().value;
    const fixture = {
      firstName: 'firstName',
      lastName: 'lastName',
    };

    expect(callDescriptor).toEqual(put(loginSuccess(fixture)));
  });

  it('should dispatch the loginFailed action it request returns unsuccessfully', () => {
    expect(true).toEqual(false);
  });
});
