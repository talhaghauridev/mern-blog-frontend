import { createHttpLink, ApolloClient, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { SERVER_URL } from "@constants/index";

const httpLink = createHttpLink({
  uri: SERVER_URL,
});

const authLink = setContext((_, { headers }) => {
  console.log(headers);

  const token = "hello";

  return {
    ...headers,
    authorization: `Bearer ${token}`,
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
