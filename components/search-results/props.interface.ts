import { SearchFormStoreStateInterface } from 'components/search-form/store/state.interface';
import { SearchFormTypeNameEnum } from 'components/search-form/type-name.enum';

export interface SearchResultsPropsInterface extends Pick<SearchFormStoreStateInterface, 'searchResults'> {
  type: SearchFormTypeNameEnum;
}
