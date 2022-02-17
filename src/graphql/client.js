import { ApolloClient, InMemoryCache } from '@apollo/client';
const { REACT_APP_API_ROOT } = process.env

export const client = new ApolloClient({
  uri: `${REACT_APP_API_ROOT}/graphql`,
  cache: new InMemoryCache()
});
