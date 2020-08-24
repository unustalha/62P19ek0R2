import { SearchFormContainer } from 'components/search-form/container';
import { SearchFormTypeNameEnum } from 'components/search-form/type-name.enum';

const Home = () => {
  return <SearchFormContainer type={SearchFormTypeNameEnum.USER} keyword='' />;
}

export default Home;
