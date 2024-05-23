// App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/auth";
import ProtectedRoute from "./core/protected-route";
import NewLandingPage3 from "./pages/newLanding3";
import WorkInProgressPage from "./pages/work-in-progress";
import LandingPage from "./pages/landing";

const App: React.FC = () => {
  const [, setAuthenticated] = useState<boolean>(
    localStorage.getItem("authenticated") === "true"
  );

  return (
    <Router>
      <Routes>
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
          path="/new-landing3"
          element={
            <ProtectedRoute>
              <NewLandingPage3 />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
