import {
  ApolloClient,
  ApolloLink,
  FetchResult,
  HttpLink,
  InMemoryCache,
  Observable,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { refreshAccessToken } from "../utils/getProfile";
import { API_BASE_URL } from "@/utils/ApiUrls";

const httpLink = new HttpLink({ uri: `${API_BASE_URL}/graphql` });

const authLink = setContext(async (_, { headers }) => {
  //   const token = localStorage.getItem("accessToken");
  const token = "hellosaaaaaaaaaaaaaaaaaaaaa21`wewqeee231111111111";

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const errorLink = onError(
  ({ graphQLErrors, operation, forward, networkError }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        if (
          err.extensions?.code === "UNAUTHENTICATED" &&
          (networkError as any).statusCode === 401
        ) {
          if (operation.operationName === "refreshToken") return;
          console.log({
            tokenRefresh: "Hello World",
            operation: operation.operationName,
          });

          return new Observable<FetchResult>((observer) => {
            console.log("Hello Refresh Token is call");

            refreshAccessToken()
              .then(({ refreshAccessToken: { accessToken } }) => {
                localStorage.setItem("accessToken", accessToken);
                operation.setContext(({ headers = {} }) => ({
                  headers: {
                    ...headers,
                    authorization: `Bearer ${accessToken}`,
                  },
                }));
                const subscriber = {
                  next: observer.next.bind(observer),
                  error: observer.error.bind(observer),
                  complete: observer.complete.bind(observer),
                };
                forward(operation).subscribe(subscriber);
              })
              .catch((error) => {
                observer.error(error);
              });
          });
        }
      }
    }
  }
);

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
