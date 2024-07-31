import { ApolloProvider } from "@apollo/client";
import React from "react";
import client from "../graphql/client";
import { BrowserRouter as ReactRouter } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactRouter>
      <ApolloProvider client={client}>
        <ThemeProvider>{children}</ThemeProvider>
      </ApolloProvider>
    </ReactRouter>
  );
};

export default AppProvider;
