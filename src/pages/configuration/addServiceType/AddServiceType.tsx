import React, { useState } from "react";
import AdminLayout from "../../../components/adminLayout/AdminLayout";
import "./addServiceType.scss";

const AddServiceType = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // TODO: handle form submission (e.g., API call)
    console.log("Create service type", { name, description });
  };

  return (
    <AdminLayout>
      <div className="add-service-type-container">
        <nav className="breadcrumb">
          <span>Services</span> / <span className="active">Service Type</span>
        </nav>

        <h1>New Service Type</h1>
        <p className="subtitle">add new service type</p>

        <form className="service-type-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button type="submit" className="btn-submit">
            Create service type
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddServiceType;
