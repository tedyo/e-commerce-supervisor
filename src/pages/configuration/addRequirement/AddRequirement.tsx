import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../../components/adminLayout/AdminLayout";
import "./addRequirement.scss";

const AddRequirement = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    requirementName: "",
    description: "",
    type: "file",
    status: "true",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const existing = JSON.parse(
      localStorage.getItem("serviceRequirements") || "[]"
    );
    const updated = [...existing, formData];

    localStorage.setItem("serviceRequirements", JSON.stringify(updated));
    console.log("Saved to localStorage:", updated);

    navigate("/configuration/service/requirment");
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
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              {[
                "text",
                "number",
                "file",
                "email",
                "date",
                "checkbox",
                "radio",
                "password",
                "url",
                "tel",
                "color",
                "range",
              ].map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label>
            Required
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
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
