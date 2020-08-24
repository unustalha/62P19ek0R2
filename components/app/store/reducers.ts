import { combineReducers, Reducer } from 'redux';
import { AppStoreStateInterface } from 'components/app/store/state.interface';

import { searchFormStoreReducers } from 'components/search-form/store/reducers';

export const AppStoreReducers = (): Reducer<AppStoreStateInterface> => combineReducers({
  searchPage: searchFormStoreReducers,
});
