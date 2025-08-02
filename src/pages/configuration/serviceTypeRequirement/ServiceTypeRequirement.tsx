import React from "react";
import AdminLayout from "../../../components/adminLayout/AdminLayout";
import "./servicetypeRequirement.scss";

const ServiceTypeRequirement = () => {
  const fields = [
    { id: 1, name: "Trade Registration", type: "file", required: true },
    { id: 2, name: "Approval Certificate", type: "file", required: false },
    { id: 3, name: "VAT Registration", type: "file", required: true },
  ];

  const handleAddField = () => {
    // TODO: Implement add field logic or navigate to add page
    alert("Add Field clicked");
  };

  const handleEditField = (id: number) => {
    // TODO: Implement edit field logic or navigate to edit page
    alert(`Edit Field ${id} clicked`);
  };

  return (
    <AdminLayout>
      <div className="service-types-container">
        <nav className="breadcrumb">
          <span>Services</span> / <span className="active">Service Type</span>
        </nav>

        <div className="header">
          <h1>Service Type</h1>
          <p className="subtitle">
            Manage the requirements for this service type
          </p>
          <button className="btn-add-field" onClick={handleAddField}>
            Add Field
          </button>
        </div>

        <table className="fields-table">
          <thead>
            <tr>
              <th>Field Name</th>
              <th>Field Type</th>
              <th>Required</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {fields.map(({ id, name, type, required }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{type}</td>
                <td>{required ? "true" : "false"}</td>
                <td>
                  <button
                    className="btn-edit"
                    onClick={() => handleEditField(id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default ServiceTypeRequirement;
