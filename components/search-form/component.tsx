import React, { Component, ChangeEvent, ReactNode } from 'react'
import { SearchFormPropsInterface } from 'components/search-form/props.interface';
import _debounce from 'lodash/debounce';
import { SearchFormTypeNameEnum } from 'components/search-form/type-name.enum';
import { SearchFormStateInterface } from 'components/search-form//state.interface';
import css from 'components/search-form/style.scss';
import { SearchFormStatusNameEnum } from 'components/search-form/status-name.enum';
import { SearchResultsComponent } from 'components/search-results/component';

export class SearchFormComponent extends Component<SearchFormPropsInterface, SearchFormStateInterface> {

  public state: SearchFormStateInterface = this.getDefaultState();

  constructor(props: SearchFormPropsInterface) {
    super(props);
    this.onChangeSearchText = this.onChangeSearchText.bind(this);
    this.fetchSearchResults = _debounce(this.fetchSearchResults, 300);
    this.onChangeType = this.onChangeType.bind(this);
    this.onClickClear = this.onClickClear.bind(this);
  }

  public componentDidMount(): void {
    const { type, keyword } = this.props
    this.setState({
      type,
      keyword,
    }, () => {
      const { keyword, type } = this.state;
      if (keyword && type) {
        this.props.fetchSearchResults({
          type,
          keyword,
        });
      }
    });
  }

  public render(): ReactNode {

    return (<>
      {this.renderLoading()}
      <div className={css['search-container']}>
        <div className={css['header']}>
          <img src='/github-logo.png' className={css['logo']} />
          <div className={css['title']}>
            <h2>Github Searcher</h2>
            <p>Search users or repositories below</p>
          </div>
        </div>
        {this.renderSearchForm()}
        {this.props.searchResults?.length
          ? <SearchResultsComponent type={this.state.type} searchResults={this.props.searchResults} />
          : this.renderNoResult()
        }
      </div>
    </>);
  }

  private renderLoading(): ReactNode {
    return (
      <>
        {(this.props.status === SearchFormStatusNameEnum.LOADING) &&
          <div className={css['loading']}></div>
        }
      </>
    );
  }

  private renderSearchForm(): ReactNode {
    return (
      <>
        <div className={css['search-form']}>
          <div className={css['input-field-container']}>
            <input
              type='text'
              value={this.state.keyword}
              onChange={this.onChangeSearchText}
              className={css['form-control']}
              placeholder='Enter keyword to search'
            />
            {this.state.keyword &&
              <button
                className={css['clear-button']}
                onClick={this.onClickClear}
              >x</button>
            }
          </div>
          <select value={this.state.type} onChange={this.onChangeType} className={css['form-control']}>
            <option value={SearchFormTypeNameEnum.USER}>{SearchFormTypeNameEnum.USER}</option>
            <option value={SearchFormTypeNameEnum.REPO}>{SearchFormTypeNameEnum.REPO}</option>
          </select>
        </div>
      </>
    );
  }

  private renderNoResult(): ReactNode {
    return (
      <>
        {(this.props.status === SearchFormStatusNameEnum.ERROR) &&
          <div className={css['no-result']}>Error in fetching records. Please try again later.</div>
        }
        {(this.props.status === SearchFormStatusNameEnum.SUCCESS && !this.props.searchResults!.length) &&
          <div className={css['no-result']}>No record found</div>
        }
      </>
    );
  }

  private getDefaultState(): SearchFormStateInterface {
    return {
      keyword: '',
      type: SearchFormTypeNameEnum.USER,
    }
  }

  private onChangeSearchText(e: ChangeEvent<HTMLInputElement>): void {

    const { value } = e.currentTarget;

    this.setState({
      keyword: value
    });

    if (value.length > 3) {
      this.fetchSearchResults();
    }
  }

  private onChangeType(e: ChangeEvent<HTMLSelectElement>): void {

    const type = e.currentTarget.value as SearchFormTypeNameEnum;
    this.setState({
      type,
    }, this.fetchSearchResults);
  }

  private onClickClear(): void {
    this.setState({
      keyword: '',
    });
    this.props.reset();
  }

  private fetchSearchResults(): void {
    const { keyword, type } = this.state;
    this.props.fetchSearchResults({
      type,
      keyword,
    });
  }
}
