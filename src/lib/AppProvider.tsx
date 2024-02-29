import { ApolloProvider } from "@apollo/client";
import { AppProviderProps } from "../types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "@redux/store";
import client from "@graphql/client";

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </Provider>
  );
};

export default AppProvider;
