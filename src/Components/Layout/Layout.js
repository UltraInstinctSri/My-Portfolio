import React from "react";
import { HelmetProvider } from "react-helmet-async";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <HelmetProvider>
      <Header />
      {children}
    </HelmetProvider>
  );
};

export default Layout;
