import { Link, useLocation, useNavigate } from "react-router-dom";
import "./header.scss";
import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import { ChevronDown } from "lucide-react";
import { svgUrl } from "../../utils/configs/assetsConfig";
import navLinks from "../../data/navLinks.json";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [openSmallMenu, setOpenSmallMenu] = useState(false);
  const [activeNav, setActiveNav] = useState(pathname);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const excludedPaths = ["/create-password"];

  useEffect(() => {
    setOpenSmallMenu(false);
    setActiveNav(pathname);
    setOpenDropdown(null);
  }, [pathname]);

  const gotoHome = () => {
    if (excludedPaths.includes(pathname)) return;
    navigate("/");
  };

  return (
    <nav className="top-header">
      <div className="header-wrapper">
        <div className="logo-container" onClick={gotoHome}>
          <img src={svgUrl + "logo.svg"} alt="Logo" />
        </div>

        <div className="nav-container">
          {!excludedPaths.includes(pathname) && (
            <div className="left-nav-items">
              <div className="nav-title-login">
                <div className="title">E-Commerce Licensing</div>
                <div className="right-nav-items">
                  <Link to="/sign-in" className="login-btn">
                    Login / Register →
                  </Link>
                </div>
              </div>

              <div className="nav-links">
                {navLinks.map((item) => (
                  <div
                    className="nav-items"
                    key={item.path}
                    onMouseEnter={() =>
                      item.children
                        ? setOpenDropdown(item.path)
                        : setOpenDropdown(null)
                    }
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link to={item.path} className="flex items-center gap-1">
                      {item.label}
                      {item.children && <ChevronDown size={16} />}
                    </Link>
                    <ActiveIndicator
                      activeNav={activeNav}
                      pathname={item.path}
                    />

                    {item.children && openDropdown === item.path && (
                      <div className="dropdown-menu">
                        {item.children.map((child) => (
                          <Link key={child.path} to={child.path}>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="small-nav-container">
          <Hamburger
            rounded
            toggled={openSmallMenu}
            toggle={setOpenSmallMenu}
            color="#343640"
          />
          {openSmallMenu && (
            <div className="nav-items">
              <Link to="/sign-in">
                <button className="login-button">Login / Register →</button>
              </Link>
              {navLinks.map((item) => (
                <div key={item.path} className="mobile-nav-item">
                  <Link
                    className={pathname === item.path ? "active" : ""}
                    to={item.path}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="mobile-submenu">
                      {item.children.map((child) => (
                        <Link key={child.path} to={child.path}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const ActiveIndicator = ({
  pathname,
  activeNav,
}: {
  pathname: string;
  activeNav: string;
}) => {
  return (
    <div
      className={
        activeNav === pathname || activeNav === pathname + "/"
          ? "active activeIndicator"
          : "activeIndicator"
      }
    ></div>
  );
};

export default Header;
