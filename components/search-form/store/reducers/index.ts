import { combineReducers, Reducer } from 'redux';
import { searchFormStoreReducersStatus } from 'components/search-form/store/reducers/status';
import { searchFormStoreReducersSearchResults } from 'components/search-form/store/reducers/search-results';
import { SearchFormStoreStateInterface } from 'components/search-form/store/state.interface';

export const searchFormStoreReducers: Reducer<SearchFormStoreStateInterface> = combineReducers({
  status: searchFormStoreReducersStatus,
  searchResults: searchFormStoreReducersSearchResults,
});
