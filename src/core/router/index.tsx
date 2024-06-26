import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "../../pages/landing";
import JobDetail from "../../pages/job-details";
import WorkInProgressPage from "../../pages/work-in-progress";
import Auth from "../../pages/auth/auth";
import { useEffect, useState } from "react";
import AppLayout from "../layout";
import { AnimatePresence } from "framer-motion";
import useLoadingStore from "../store/loading.store";
import GlobalLoader from "../../components/molecules/global-loader";

const Router: React.FC = () => {
  const { isLoading } = useLoadingStore((store) => store);
  const [, setAuthenticated] = useState<boolean>(
    localStorage.getItem("authenticated") === "true"
  );

  useEffect(() => {
    if (isLoading) document.body.classList.add("no-scroll");
    if (!isLoading) document.body.classList.remove("no-scroll");
  }, [isLoading]);

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
      ],
    },
    {
      element: <WorkInProgressPage />,
      path: "/",
    },
    {
      element: <div>Page not found</div>,
      path: "/*",
    },
  ]);
  return (
    <>
      <AnimatePresence>
        {isLoading && window.location.href.split("/")[3] !== "" && (
          <GlobalLoader />
        )}
      </AnimatePresence>
      <RouterProvider router={router} />
    </>
  );
};

export default Router;
