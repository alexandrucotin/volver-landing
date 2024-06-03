// App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/auth";
import ProtectedRoute from "./core/protected-route";
import WorkInProgressPage from "./pages/work-in-progress";
import { ConfigProvider } from "antd";
import JobDetail from "./pages/job-details";
import LandingPage from "./pages/landing";

const App: React.FC = () => {
  const [, setAuthenticated] = useState<boolean>(
    localStorage.getItem("authenticated") === "true"
  );

  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#b0241c",
          // Alias Token
        },
        components: {},
      }}
    >
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
            path="/portfolio/:id"
            element={
              <ProtectedRoute>
                <JobDetail />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </ConfigProvider>
  );
};

export default App;
