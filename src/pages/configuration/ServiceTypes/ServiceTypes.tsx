import { useNavigate } from "react-router-dom";
import AdminLayout from "../../../components/adminLayout/AdminLayout";
import "./serviceTypes.scss";

const ServiceTypes = () => {
  const navigate = useNavigate();

  const handleAddServiceType = () => {
    navigate("add-service-type");
  };
  const handleManage = () => {
    navigate("/configuration/service/requirment");
  };
  return (
    <AdminLayout>
      <div className="configuration-page">
        <div className="page-header">
          <h2>Service Types</h2>
          <button className="add-button" onClick={handleAddServiceType}>
            + Add Service Type
          </button>
        </div>

        <table className="service-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Requirements</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>E-Commerce Operators</td>
              <td>E-commerce operator license to operate in Ethiopia as ...</td>
              <td>Business Analysis, Market Research</td>
              <td>
                <button className="manage-button" onClick={handleManage}>
                  Manage
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default ServiceTypes;
