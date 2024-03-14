import { USER_INFO_KEY } from "@constants";
import LocalStorage from "@utils/LocalStorage";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectRouteProps {
  element?: React.ReactElement;
  isAdminRoute?: boolean;
}

const ProtectRoute: React.FC<ProtectRouteProps> = ({
  isAdminRoute = false,
  element,
}) => {
  const isAuthenticated = LocalStorage.get(USER_INFO_KEY);

  const admin:boolean = isAuthenticated?.role === "admin" ? true : false;
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
