import { createReducer } from 'typesafe-actions';
import { SearchFormStoreAction } from 'components/search-form/store/action';
import { SearchFormResultDataInterface } from 'components/search-form/search-result-data.interface';

export const searchFormStoreReducersSearchResults = createReducer([] as Array<SearchFormResultDataInterface>)
  .handleAction([
    SearchFormStoreAction.fetchSearchResults.failure,
    SearchFormStoreAction.reset.request,
  ], () => [])
  .handleAction(
    SearchFormStoreAction.fetchSearchResults.success,
    (_, { payload }) => payload,
  );
