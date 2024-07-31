import { Route, Routes } from "react-router-dom";
import AuthRoutes from "./auth.routes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<AuthRoutes />} />
    </Routes>
  );
};

export default AppRoutes;
