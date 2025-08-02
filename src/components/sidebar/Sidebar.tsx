import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BadgeCheck,
  Banknote,
  Truck,
  BarChart2,
  HelpCircle,
  Settings,
  LogOut,
  Sliders,
  FileText,
  Shuffle,
  ShoppingCart,
  Users,
  PieChart,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import "./sidebar.scss";

const Sidebar = () => {
  const [configOpen, setConfigOpen] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <h3 className="section-title">License Manager</h3>
        <ul className="menu">
          <li>
            <NavLink to="/dashboard">
              <LayoutDashboard size={18} /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-licenses">
              <BadgeCheck size={18} /> Licensing
            </NavLink>
          </li>

          {/* Toggle Configuration submenu */}
          <li>
            <div
              className="menu-toggle"
              onClick={() => setConfigOpen((prev) => !prev)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
                padding: "10px 12px",
                borderRadius: "8px",
                color: "white",
              }}
            >
              <Sliders size={18} />
              Configuration
              {configOpen ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </div>
            {configOpen && (
              <ul
                style={{ paddingLeft: "25px", marginTop: "10px" }}
                className="submenu-list"
              >
                <li className="submenu-list-items">
                  <NavLink to="/configuration/service">
                    <FileText size={16} /> Service
                  </NavLink>
                </li>
                <li className="submenu-list-items">
                  <NavLink to="/configuration/workflow">
                    <Shuffle size={16} /> Workflow
                  </NavLink>
                </li>
                <li className="submenu-list-items">
                  <NavLink to="/configuration/others">
                    <ShoppingCart size={16} /> others
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink to="/users">
              <Users size={18} /> Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/reports">
              <PieChart size={18} /> Reports
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="sidebar-bottom">
        <NavLink to="/help">
          <HelpCircle size={18} /> Help
        </NavLink>
        <NavLink to="/settings">
          <Settings size={18} /> Setting
        </NavLink>
        <NavLink to="/logout">
          <LogOut size={18} /> Log Out
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
