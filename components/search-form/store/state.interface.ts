import { SearchFormResultDataInterface } from 'components/search-form/search-result-data.interface';
import { SearchFormStatusNameEnum } from 'components/search-form/status-name.enum';

export interface SearchFormStoreStateInterface {
  status: SearchFormStatusNameEnum;
  searchResults: Array<SearchFormResultDataInterface>;
}
