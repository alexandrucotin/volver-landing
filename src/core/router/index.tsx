import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "../../pages/landing";
import JobDetail from "../../pages/job-details";
import AppLayout from "../layout";
import { AnimatePresence } from "framer-motion";
import useLoadingStore from "../store/loading.store";
import GlobalLoader from "../../components/molecules/global-loader";
import PageNotFound from "../../pages/404";

const Router: React.FC = () => {
  const { isLoading } = useLoadingStore((store) => store);

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <LandingPage /> },
        { path: "portfolio/:id", element: <JobDetail /> },
      ],
    },
    {
      element: <PageNotFound />,
      path: "/*",
    },
  ]);
  return (
    <>
      <AnimatePresence>{isLoading && <GlobalLoader />}</AnimatePresence>
      <RouterProvider router={router} />
    </>
  );
};

export default Router;
