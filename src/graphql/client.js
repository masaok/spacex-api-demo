import { ApolloClient, InMemoryCache } from '@apollo/client'
const { REACT_APP_API_ROOT } = process.env

export const client = new ApolloClient({
  // uri: `${REACT_APP_API_ROOT}/graphql`,

  // The GraphQL endpoint moved temporarily to a new URL:
  // https://github.com/SpaceXLand/api/issues/241#issuecomment-1403255116
  uri: 'https://main--spacex-l4uc6p.apollographos.net/graphql',
  cache: new InMemoryCache(),
})
