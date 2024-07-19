import { ApolloProvider } from "@apollo/client";
import React from "react";
import client from "../graphql/client";
import { BrowserRouter as ReactRouter } from "react-router-dom";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactRouter>
      <ApolloProvider client={client}>{children}</ApolloProvider>;
    </ReactRouter>
  );
};

export default AppProvider;
