import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AdminLayout from "../../../components/adminLayout/AdminLayout";
import "./serviceRequirementTypes.scss";

const ServiceRequirementTypes = () => {
  const navigate = useNavigate();
  const [requirements, setRequirements] = useState<any[]>([]);

  // Default requirements
  const defaultRequirements = [
    { requirementName: "Trade Registration", type: "file", status: "true" },
    { requirementName: "Approval Certificate", type: "file", status: "false" },
    { requirementName: "VAT Registration", type: "file", status: "true" },
  ];

  useEffect(() => {
    const stored = JSON.parse(
      localStorage.getItem("serviceRequirements") || "[]"
    );
    setRequirements([...defaultRequirements, ...stored]);
  }, []);

  const handleAddField = () => {
    navigate("/configuration/service/requirment/add-type");
  };

  return (
    <AdminLayout>
      <div className="configuration-page">
        <div className="page-header">
          <h2>Service Type</h2>
          <button className="add-button" onClick={handleAddField}>
            Add Field
          </button>
        </div>

        <table className="service-table">
          <thead>
            <tr>
              <th>Field Name</th>
              <th>Field Type</th>
              <th>Required</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requirements.map((req, index) => (
              <tr key={index}>
                <td>{req.requirementName}</td>
                <td>{req.type}</td>
                <td>{req.status}</td>
                <td>
                  <button className="manage-button">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default ServiceRequirementTypes;
