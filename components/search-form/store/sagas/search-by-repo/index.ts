import { SearchFormResultDataInterface } from 'components/search-form/search-result-data.interface';
import { SearchFormStoreSagasResposneInterface } from 'components/search-form/store/sagas/response.interface';
import { SearchFormStoreSagasSearchByRepoItemInterface } from 'components/search-form/store/sagas/search-by-repo/item.interface';
import { sendFetchRequest } from 'utils/fetch';
import { FetchMethodNameEnum } from 'utils/fetch/method-name.enum';
import { FetchResponseInterface } from 'utils/fetch/fetch-response.interface';
import { AppConfig } from 'components/app/config';

export async function searchFormStoreSagasSearchByRepo(keyword: string): Promise<Array<SearchFormResultDataInterface> | undefined> {

  type ResponseInterface = SearchFormStoreSagasResposneInterface<SearchFormStoreSagasSearchByRepoItemInterface>;

  try {
    const response: FetchResponseInterface<ResponseInterface> = await sendFetchRequest<ResponseInterface>(
      AppConfig.apiEndpoints.fetchRepo(keyword),
      FetchMethodNameEnum.GET,
    );

    if (response.status === 200) {

      return response.body.items?.map((row: SearchFormStoreSagasSearchByRepoItemInterface) => ({
        userName: row.owner?.login || '',
        userProfileUrl: row.owner?.html_url || '',
        userPictureUrl: row.owner?.avatar_url || '',
        repoName: row.name,
        repoUrl: row.html_url,
      })) || [];
    }
  } catch (e) {
    throw new Error(e);
  }
}
