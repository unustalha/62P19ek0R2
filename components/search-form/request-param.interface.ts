import { SearchFormTypeNameEnum } from 'components/search-form/type-name.enum';

export interface SearchFormRequestParamInterface {
  type: SearchFormTypeNameEnum;
  keyword: string;
}
