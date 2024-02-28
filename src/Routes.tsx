import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Layout = lazy(() => import("@layout/layout"));
const Home = lazy(() => import("@pages/home"));
const Signup = lazy(() => import("@pages/(authenication)/signup"));
const Login = lazy(() => import("@pages/(authenication)/login"));
const BlogDetials = lazy(() => import("@pages/blog-detials"));

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:blogId" element={<BlogDetials />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
