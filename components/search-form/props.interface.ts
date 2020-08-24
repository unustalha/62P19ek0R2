import { SearchFormStoreStateInterface } from 'components/search-form/store/state.interface';
import { SearchFormRequestParamInterface } from 'components/search-form/request-param.interface';
import { SearchFormStateInterface } from 'components/search-form/state.interface';

export interface SearchFormPropsInterface extends SearchFormStoreStateInterface, SearchFormStateInterface {
  fetchSearchResults: (params: SearchFormRequestParamInterface) => void;
  reset: () => void;
}
