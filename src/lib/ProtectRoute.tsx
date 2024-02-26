// ProtectRoute.tsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getLocalStorage } from "../utils/LocalStorage";

interface ProtectRouteProps {
  element?: React.ReactElement;
  isAdminRoute?: boolean;
}

const ProtectRoute: React.FC<ProtectRouteProps> = ({
  isAdminRoute = false,
  element,
}) => {
  const isAuthenticated = getLocalStorage("User") || true;

  const admin = isAuthenticated?.role === "admin" ? true : false;
  console.log(isAuthenticated, admin);
  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace />;
  }

  if (isAdminRoute && !admin) {
    return <Navigate to={"/user"} replace />;
  }

  return element ? element : <Outlet />;
};

export default ProtectRoute;
