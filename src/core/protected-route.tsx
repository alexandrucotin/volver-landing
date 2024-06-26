/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = localStorage.getItem("authenticated") === "true";
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <div>{children}</div>;
};

export default ProtectedRoute;
