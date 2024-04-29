import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { AuthPage } from "@pages/AuthPage";

export const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
