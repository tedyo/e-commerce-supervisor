import { Navigate, Route, Routes } from "react-router-dom";
import Wrapper from "../components/wrapper/Wrapper";
import Landing from "../pages/Landing/Landing";
import SignIn from "../pages/auth/signIn/SignIn";
import SignUp from "../pages/auth/signUp/SignUp";
import VerifyAccount from "../pages/auth/verifyAccount/VerifyAccount";

import AddServiceType from "../pages/configuration/addServiceType/AddServiceType";
import AddRequirement from "../pages/configuration/addRequirement/AddRequirement";
import WorkflowConfig from "../pages/configuration/workflowConfig/WorkflowConfig";
import OtherConfig from "../components/otherConfig/OtherConfig";
import ServiceTypes from "../pages/configuration/ServiceTypes/ServiceTypes";
import ServiceRequirementTypes from "../pages/configuration/serviceRequirementTypes/ServiceRequirementTypes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route path="/" element={<Landing />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/configuration/service" element={<ServiceTypes />} />
        <Route
          path="/configuration/service/add-service-type"
          element={<AddServiceType />}
        />

        <Route
          path="/configuration/service/requirment/add-type"
          element={<AddRequirement />}
        />
        <Route
          path="/configuration/service/requirment"
          element={<ServiceRequirementTypes />}
        />
        <Route path="/configuration/workflow" element={<WorkflowConfig />} />
        <Route path="/configuration/others" element={<OtherConfig />} />

        <Route path="/verify-phone" element={<VerifyAccount />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
