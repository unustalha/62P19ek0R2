import { SagaIterator } from 'redux-saga';
import { SearchFormStoreAction } from 'components/search-form/store/action';
import { put, call } from 'redux-saga/effects';
import { SearchFormTypeNameEnum } from 'components/search-form/type-name.enum';
import { SearchFormResultDataInterface } from 'components/search-form/search-result-data.interface';
import { searchFormStoreSagasSearchByUser } from 'components/search-form/store/sagas/search-by-user';
import { searchFormStoreSagasSearchByRepo } from 'components/search-form/store/sagas/search-by-repo';

export function* searchFormStoreSagasFetchSearchResultsRequest(
  action: ReturnType<typeof SearchFormStoreAction.fetchSearchResults.request>,
): SagaIterator {

  let searchResults: Array<SearchFormResultDataInterface> = [];

  try {

    switch (action.payload.type) {

      case SearchFormTypeNameEnum.USER:
        searchResults = yield call(searchFormStoreSagasSearchByUser, action.payload.keyword);
        break;
      case SearchFormTypeNameEnum.REPO:
        searchResults = yield call(searchFormStoreSagasSearchByRepo, action.payload.keyword);
        break;
    }

    yield put(SearchFormStoreAction.fetchSearchResults.success(searchResults));

  } catch (e) {
    yield put(SearchFormStoreAction.fetchSearchResults.failure());
  }
}
