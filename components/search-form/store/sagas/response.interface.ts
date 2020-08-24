export interface SearchFormStoreSagasResposneInterface<I> extends Response {
  incomplete_results: boolean;
  items: Array<I>;
  total_count: number;
}