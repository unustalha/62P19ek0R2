import { all, fork } from 'redux-saga/effects';
import { searchFormStoreSagas } from 'components/search-form/store/sagas';

export function* appStoreSagas() {
  yield all([
    fork(searchFormStoreSagas)
  ]);
}
