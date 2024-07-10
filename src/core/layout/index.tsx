import { ScrollRestoration, Outlet, useLocation } from "react-router-dom";
import Menu from "../../components/organisms/navbar";
import { useEffect } from "react";
import Footer from "../../components/molecules/footer";

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
      <ScrollRestoration />
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
