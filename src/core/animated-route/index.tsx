import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "../../pages/landing";
import ProtectedRoute from "../protected-route";
import JobDetail from "../../pages/job-details";
import WorkInProgressPage from "../../pages/work-in-progress";
import Auth from "../../pages/auth/auth";
import { useState } from "react";

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  const [, setAuthenticated] = useState<boolean>(
    localStorage.getItem("authenticated") === "true"
  );

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/login"
          element={<Auth onAuthenticate={setAuthenticated} />}
        />
        <Route path="/" element={<WorkInProgressPage />} />
        <Route
          path="/landing"
          element={
            <ProtectedRoute>
              <LandingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/portfolio/:id"
          element={
            <ProtectedRoute>
              <JobDetail />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
