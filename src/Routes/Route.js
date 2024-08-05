import React, { Suspense, lazy } from "react";
import Layout from "../Components/Layout/Layout";

import { PAGE_URLS } from "../AppConfig/appConfig";
import { Route, Routes } from "react-router-dom";

const LandingPage = lazy(() => import("../Components/LandingPage/LandingPage"));
const AppRoutes = () => {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
            <button type="button" class="bg-indigo-500 ..." disabled>
              <svg
                class="animate-spin h-5 w-5 mr-3 ..."
                viewBox="0 0 24 24"
              ></svg>
              Processing...
            </button>
          </div>
        }
      >
        <Routes>
          <Route to={PAGE_URLS.HOMEPAGE} element={<LandingPage />} index />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default AppRoutes;
