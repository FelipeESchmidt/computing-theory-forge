import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { selectAuthentication } from "@redux/Authentication/selectors";

import { PrivateRoutes } from "./private";
import { PublicRoutes } from "./public";

export const Router: React.FC = () => {
  const { loggedIn } = useSelector(selectAuthentication);

  const getRoutes = () => {
    if (loggedIn) {
      return <PrivateRoutes />;
    }

    return <PublicRoutes />;
  };

  return <BrowserRouter>{getRoutes()}</BrowserRouter>;
};
