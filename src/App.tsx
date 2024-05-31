// App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/auth";
import ProtectedRoute from "./core/protected-route";
import NewLandingPage3 from "./pages/newLanding3";
import WorkInProgressPage from "./pages/work-in-progress";
import LandingPage from "./pages/landing";
import { ConfigProvider } from "antd";
import JobDetail from "./pages/job-details";
import Menu from "./components/organisms/navbar";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact/contact";

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
          borderRadius: 16,
          // Alias Token
        },
        components: {},
      }}
    >
      <Router>
        <div
          className=""
          style={{ maxWidth: 1440, margin: "0 auto", position: "relative" }}
        >
          <Menu />
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
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <AboutPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <ProtectedRoute>
                  <ContactPage />
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
        </div>
      </Router>
    </ConfigProvider>
  );
};

export default App;
