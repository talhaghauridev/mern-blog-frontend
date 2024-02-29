import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ErrorBoundary from "@lib/ErrorBoundary";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <ErrorBoundary fallback={"Application Error"}>
        <Outlet />
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default Layout;
