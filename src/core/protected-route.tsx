// ProtectedRoute.tsx
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

  return (
    <div
      className=""
      style={{ maxWidth: 1440, margin: "0 auto", position: "relative" }}
    >
      {children}
    </div>
  );
};

export default ProtectedRoute;
