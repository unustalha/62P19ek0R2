import { SagaIterator } from 'redux-saga';
import { all, takeLatest } from 'redux-saga/effects';
import { SearchFormStoreAction } from 'components/search-form/store/action';
import { searchFormStoreSagasFetchSearchResultsRequest } from 'components/search-form/store/sagas/fetch-search-results-request';

export function* searchFormStoreSagas(): SagaIterator {

  yield all([
    takeLatest(
      SearchFormStoreAction.fetchSearchResults.request,
      searchFormStoreSagasFetchSearchResultsRequest,
    ),
  ]);
}
