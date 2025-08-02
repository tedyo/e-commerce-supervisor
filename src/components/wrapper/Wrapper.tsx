import Footer from "../fotter/Footer";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./wrapper.scss";
import { useEffect } from "react";
import Header from "../header/Header";
const Wrapper = () => {
  const { pathname } = useLocation();
  const excludedPathsForFooter = ["/create-password", "/home"];
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [navigate]);

  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      {!excludedPathsForFooter.some(
        (path) => pathname.substring(0, 11) === path.substring(0, 11)
      ) && <Footer />}
    </div>
  );
};

export default Wrapper;
