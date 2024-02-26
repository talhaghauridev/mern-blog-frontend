import { AppProviderProps } from "../types";
import { ApolloProvider } from "@apollo/client";
import client from "@graphql/client";

const AppProvider = ({ children }: AppProviderProps) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default AppProvider;
