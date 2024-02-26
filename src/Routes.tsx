import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";
const Home = lazy(() => import("@pages/home"));
const Signup = lazy(() => import("@pages/(authenication)/signup"));
const Login = lazy(() => import("@pages/(authenication)/login"));
const Layout = lazy(() => import("@layout/layout"));

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
