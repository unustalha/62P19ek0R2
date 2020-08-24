import { SearchFormResultDataInterface } from 'components/search-form/search-result-data.interface';
import { SearchFormStoreSagasResposneInterface } from 'components/search-form/store/sagas/response.interface';
import { SearchFormStoreSagasSearchByUserItemInterface } from 'components/search-form/store/sagas/search-by-user/item.interface';
import { sendFetchRequest } from 'utils/fetch';
import { FetchMethodNameEnum } from 'utils/fetch/method-name.enum';
import { FetchResponseInterface } from 'utils/fetch/fetch-response.interface';
import { AppConfig } from 'components/app/config';

export async function searchFormStoreSagasSearchByUser(keyword: string): Promise<Array<SearchFormResultDataInterface> | undefined> {

  type ResponseInterface = SearchFormStoreSagasResposneInterface<SearchFormStoreSagasSearchByUserItemInterface>;

  try {
    const response: FetchResponseInterface<ResponseInterface> = await sendFetchRequest<ResponseInterface>(
      AppConfig.apiEndpoints.fetchUser(keyword),
      FetchMethodNameEnum.GET,
    );

    if (response.status === 200) {

      return response.body.items?.map((row: SearchFormStoreSagasSearchByUserItemInterface) => ({
        userName: row.login,
        userProfileUrl: row.html_url,
        userPictureUrl: row.avatar_url,
      })) || [];
    }
  } catch (e) {
    throw new Error(e);
  }
}
