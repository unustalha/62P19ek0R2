import { SearchFormContainer } from 'components/search-form/container';
import { SearchFormTypeNameEnum } from 'components/search-form/type-name.enum';
import { useRouter } from 'next/router'

const Search = () => {
  const { query } = useRouter();

  let type: SearchFormTypeNameEnum = SearchFormTypeNameEnum.USER;
  let keyword: string = '';

  if (query?.param?.length) {

    type = (query.param[0] as SearchFormTypeNameEnum);
    keyword = query.param[1];

    const availableSearchTypes = [SearchFormTypeNameEnum.USER, SearchFormTypeNameEnum.REPO];

    if (!availableSearchTypes.includes(type)) {
      type = SearchFormTypeNameEnum.USER;
    }

    return <SearchFormContainer type={type} keyword={keyword} />;
  }

  return null;
}

export default Search;
