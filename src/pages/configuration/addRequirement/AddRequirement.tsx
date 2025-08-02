import { useState } from "react";
import AdminLayout from "../../../components/adminLayout/AdminLayout";
import "./addRequirement.scss";

const AddRequirement = () => {
  const [formData, setFormData] = useState({
    requirementName: "",
    description: "",
    type: "",
    status: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add save logic, e.g., API call
    console.log("Saving Requirement:", formData);
  };

  return (
    <AdminLayout>
      <div className="add-requirement-container">
        <h1>Add Field/Requirement</h1>
        <form onSubmit={handleSubmit} className="requirement-form">
          <label>
            Requirement Name
            <input
              type="text"
              name="requirementName"
              value={formData.requirementName}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Description
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>

          <label>
            Type
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Status
            <input
              type="text"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className="btn-save">
            Save
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddRequirement;
