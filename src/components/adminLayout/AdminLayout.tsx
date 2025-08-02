import Sidebar from "../sidebar/Sidebar";
import "./adminLayout.scss";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="main-content">{children}</div>
    </div>
  );
};

export default AdminLayout;
