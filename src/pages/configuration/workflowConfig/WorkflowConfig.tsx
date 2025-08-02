import { useState } from "react";
import AdminLayout from "../../../components/adminLayout/AdminLayout";
import "./workflowConfig.scss";

const WorkflowConfig = () => {
  const [workflowOption, setWorkflowOption] = useState("supervisor_dispatch");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setWorkflowOption(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save logic here (e.g., API call)
    console.log("Saved workflow option:", workflowOption);
  };

  return (
    <AdminLayout>
      <div className="workflow-config-container">
        <nav className="breadcrumb">
          <span>Services</span> /{" "}
          <span className="active">Workflow Configuration</span>
        </nav>

        <h2>Workflow Configuration</h2>
        <form onSubmit={handleSubmit} className="workflow-form">
          <label htmlFor="workflow-select" className="label-text">
            Workflow Options
          </label>
          <select
            id="workflow-select"
            value={workflowOption}
            onChange={handleChange}
            className="workflow-select"
          >
            <option value="supervisor_dispatch">supervisor_dispatch</option>
          </select>
          <button type="submit" className="btn-save">
            Save
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default WorkflowConfig;
