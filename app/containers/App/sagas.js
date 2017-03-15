import { takeLatest } from 'redux-saga/effects';

import {
  ME_FROM_TOKEN,
} from './constants';

function* getMeFromToken() {

}

function* meData() {
  yield takeLatest(ME_FROM_TOKEN, getMeFromToken);
}

export default [
  meData,
];
