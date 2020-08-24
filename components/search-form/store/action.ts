import { createAsyncAction } from 'typesafe-actions';
import { SearchFormRequestParamInterface } from 'components/search-form/request-param.interface';
import { SearchFormResultDataInterface } from 'components/search-form/search-result-data.interface';

export const SearchFormStoreAction = {

  fetchSearchResults: createAsyncAction(
    'SearchFormStoreAction/fetchSearchResults/request',
    'SearchFormStoreAction/fetchSearchResults/success',
    'SearchFormStoreAction/fetchSearchResults/failure')<
      SearchFormRequestParamInterface,
      Array<SearchFormResultDataInterface>,
      undefined
    >(),

  reset: createAsyncAction(
    'SearchFormStoreAction/reset/request',
    'SearchFormStoreAction/reset/success',
    'SearchFormStoreAction/reset/failure')<
      undefined,
      undefined,
      undefined
    >(),
};

export type SearchFormStoreAction = typeof SearchFormStoreAction;

declare module 'typesafe-actions' {
  export interface RootActionInterface {
    SearchFormStoreAction: SearchFormStoreAction;
  }
}