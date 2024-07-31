import PageLoading from "@/components/common/PageLoading";
import { lazy, Suspense, useEffect, useTransition } from "react";
import { Route, Routes } from "react-router-dom";
const SignIn = lazy(() => import("@/pages/(authenication)/signin"));
const SignUp = lazy(() => import("@/pages/(authenication)/signup"));

const AuthRoutes = () => {
  const [pending, startTransition] = useTransition();

  return (
    <Routes>
      <Route
        path="/sign-in"
        element={
          <Suspense fallback={null}>
            <SignIn />
          </Suspense>
        }
      />
      <Route
        path="/sign-up"
        element={
          <Suspense fallback={null}>
            <SignUp />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AuthRoutes;
