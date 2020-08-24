import { connect } from 'react-redux';
import { AppStoreStateInterface } from 'components/app/store/state.interface';
import { SearchFormPropsInterface } from 'components/search-form/props.interface';
import { SearchFormStoreAction } from 'components/search-form/store/action';
import { SearchFormComponent } from 'components/search-form/component';

export const mapStateToProps = (state: AppStoreStateInterface): Pick<
  SearchFormPropsInterface,
  'status' | 'searchResults'
> => state.searchPage;

export const mapDispatchToProps: Pick<
  SearchFormPropsInterface,
  'fetchSearchResults' | 'reset'
> = {
  fetchSearchResults: SearchFormStoreAction.fetchSearchResults.request,
  reset: SearchFormStoreAction.reset.request,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export const SearchFormContainer = withConnect(SearchFormComponent);

