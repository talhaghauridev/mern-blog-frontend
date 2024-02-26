import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Layout from "@layout/layout";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
