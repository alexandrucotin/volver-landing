import { AnimatePresence } from "framer-motion";
import {
  Outlet,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from "react-router-dom";
import LandingPage from "../../pages/landing";
import ProtectedRoute from "../protected-route";
import JobDetail from "../../pages/job-details";
import WorkInProgressPage from "../../pages/work-in-progress";
import Auth from "../../pages/auth/auth";
import { useState } from "react";
import { Menu } from "antd";

const AppLayout = () => (
  <div
    className=""
    style={{ maxWidth: 1440, margin: "0 auto", position: "relative" }}
  >
    <ProtectedRoute>
      <Menu />
      <ScrollRestoration />
      <Outlet />
    </ProtectedRoute>
  </div>
);

const AnimatedRoutes: React.FC = () => {
  const [, setAuthenticated] = useState<boolean>(
    localStorage.getItem("authenticated") === "true"
  );

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Auth onAuthenticate={setAuthenticated} />,
    },
    {
      element: <AppLayout />,
      children: [
        { path: "landing", element: <LandingPage /> },
        { path: "portfolio/:id", element: <JobDetail /> },
        /* errorElement: <Error />, */
      ],
    },
    {
      element: <WorkInProgressPage />,
      path: "/",
    },
  ]);
  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
