import { ScrollRestoration, Outlet } from "react-router-dom";
import ProtectedRoute from "../protected-route";
import Menu from "../../components/organisms/navbar";

const AppLayout: React.FC = () => {
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
