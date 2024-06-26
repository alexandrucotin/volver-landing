import { ScrollRestoration, Outlet, useLocation } from "react-router-dom";
import ProtectedRoute from "../protected-route";
import Menu from "../../components/organisms/navbar";
import { useEffect } from "react";

const AppLayout: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      className=""
      style={{ maxWidth: 1440, margin: "0 auto", position: "relative" }}
    >
      <ProtectedRoute>
        <ScrollRestoration />
        <Menu />
        <Outlet />
      </ProtectedRoute>
    </div>
  );
};

export default AppLayout;
