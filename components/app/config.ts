export const AppConfig = {
  pageTitle: 'Tradeling Nextjs Test',
  apiEndpoints: {
    fetchUser: (keyword: string) => `https://api.github.com/search-form/users?q=${keyword}`,
    fetchRepo: (keyword: string) => `https://api.github.com/search-form/repositories?q=${keyword}`,
  },
}
