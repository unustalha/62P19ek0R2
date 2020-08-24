import React, { Component, ReactNode } from 'react'
import { SearchResultsPropsInterface } from 'components/search-results/props.interface';
import { SearchFormTypeNameEnum } from 'components/search-form/type-name.enum';
import css from 'components/search-results/style.scss';
import { SearchFormResultDataInterface } from 'components/search-form/search-result-data.interface';

export class SearchResultsComponent extends Component<SearchResultsPropsInterface> {

  public render(): ReactNode {
    return (
      <div className={css['search-result-container']}>
        {this.props.type === SearchFormTypeNameEnum.REPO
          ? this.renderRepositories()
          : this.renderUsers()
        }
      </div>
    );
  }

  private renderRepositories(): ReactNode {

    return (
      <>
        {this.props.searchResults.map((item: SearchFormResultDataInterface) =>
          <div className={css['repo-item']}>
            {this.renderUserPicture(item)}
            <div className={css['info']}>
              <a href={item.repoUrl} target='_blank' title={item.repoName} className={css['repo-link']}>{item.repoName}</a>
              <p>by {this.renderUserName(item)}</p>
            </div>
          </div>
        )}
      </>
    );
  }

  private renderUsers(): ReactNode {

    return (
      <>
        {this.props.searchResults.map((item: SearchFormResultDataInterface) =>
          <div className={css['user-item']}>
            {this.renderUserPicture(item)}
            <div className={css['info']}>
              {this.renderUserName(item)}
            </div>
          </div>
        )}
      </>
    );
  }

  private renderUserPicture(item: SearchFormResultDataInterface): ReactNode {
    return (
      <a href={item.userProfileUrl} target='_blank' title={item.userName}>
        <img src={item.userPictureUrl} className={css['picture']} />
      </a>
    );
  }

  private renderUserName(item: SearchFormResultDataInterface): ReactNode {
    return (
      <a href={item.userProfileUrl} target='_blank' className={css['name']} title={item.userName}>{item.userName}</a>
    );
  }
}
