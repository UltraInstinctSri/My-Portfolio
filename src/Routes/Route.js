import React, { Suspense, lazy } from "react";
import Layout from "../Components/Layout/Layout";
import { PAGE_URLS } from "../AppConfig/appConfig";
import { Route, Routes } from "react-router-dom";

const LandingPage = lazy(() => import("../Components/LandingPage/LandingPage"));
const ProjectPage = lazy(() => import("../Components/ProjectPage/ProjectPage"));
const Resume = lazy(() => import("../Components/Resume/Resume"));
const ContactMe = lazy(() => import("../Components/ContactMe/ContactMe"));

const AppRoutes = () => {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
            <button type="button" className="bg-indigo-500 ..." disabled>
              <svg
                className="animate-spin h-5 w-5 mr-3 ..."
                viewBox="0 0 24 24"
              ></svg>
              Processing...
            </button>
          </div>
        }
      >
        <Routes>
          <Route path={PAGE_URLS.HOMEPAGE} element={<LandingPage />} />
          <Route path={PAGE_URLS.PROJECTS} element={<ProjectPage />} />
          <Route path={PAGE_URLS.RESUME} element={<Resume />} />
          <Route path={PAGE_URLS.CONTACT_ME} element={<ContactMe />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default AppRoutes;
