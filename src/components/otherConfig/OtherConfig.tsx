import { useState } from "react";
import AdminLayout from "../../components/adminLayout/AdminLayout";
import "./otherConfig.scss";

const OtherConfig = () => {
  const [acceptPayment, setAcceptPayment] = useState("Yes");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAcceptPayment(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Submit acceptPayment to backend
    console.log("Accept Payment:", acceptPayment);
  };

  return (
    <AdminLayout>
      <div className="other-config-container">
        <nav className="breadcrumb">
          <span>Configuration</span> / <span className="active">Workflow</span>
        </nav>

        <h2>Other Configuration</h2>

        <form onSubmit={handleSubmit} className="other-form">
          <label htmlFor="payment-select" className="label-text">
            Accept Payment
          </label>
          <select
            id="payment-select"
            value={acceptPayment}
            onChange={handleChange}
            className="dropdown"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <button type="submit" className="btn-save">
            Save
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default OtherConfig;
