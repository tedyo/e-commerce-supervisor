import React, { type ReactNode } from "react";
import "./layout.scss";

interface LayoutProps {
  children: ReactNode;
  bgWhite?: boolean;
  landing?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, bgWhite, landing }) => {
  return (
    <div className={`layout ${bgWhite && "white"} ${landing && "landing"}`}>
      <div className="layout-wrapper">{children}</div>
    </div>
  );
};

export default Layout;
