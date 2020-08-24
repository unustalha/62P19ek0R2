import { createReducer } from 'typesafe-actions';
import { SearchFormStoreAction } from 'components/search-form/store/action';
import { SearchFormStatusNameEnum } from 'components/search-form/status-name.enum';

export const searchFormStoreReducersStatus = createReducer(SearchFormStatusNameEnum.INIT)
  .handleAction(SearchFormStoreAction.reset.request, () => SearchFormStatusNameEnum.INIT)
  .handleAction(SearchFormStoreAction.fetchSearchResults.request, () => SearchFormStatusNameEnum.LOADING)
  .handleAction(SearchFormStoreAction.fetchSearchResults.success, () => SearchFormStatusNameEnum.SUCCESS)
  .handleAction(SearchFormStoreAction.fetchSearchResults.failure, () => SearchFormStatusNameEnum.ERROR);