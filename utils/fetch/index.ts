import { FetchMethodNameEnum } from 'utils/fetch/method-name.enum';
import { FetchResponseInterface } from 'utils/fetch/fetch-response.interface';

export async function sendFetchRequest<ResponseInterface>(
  url: string,
  method: FetchMethodNameEnum,
  payload: Object = {},
): Promise<FetchResponseInterface<ResponseInterface>> {

  const response: Response = await fetch(url, {
    method,
    ...(method !== FetchMethodNameEnum.GET && {
      body: payload ? JSON.stringify(payload) : null,
    })
  });

  return {
    status: response.status,
    body: await response?.json() || {},
  }
}
