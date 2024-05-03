import { AuthPage } from "@pages/AuthPage";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
