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
          <div className="flex items-center justify-center h-screen">
            <svg
              className="animate-spin h-12 w-12 text-green-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
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
