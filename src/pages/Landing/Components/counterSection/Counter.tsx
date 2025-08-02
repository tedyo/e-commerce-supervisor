import { Link } from "react-router-dom";
import Layout from "../../../../components/layout/Layout";
import CounterCard from "./components/CounterCard";
import Button from "../../../../components/button/Button";

import "./counter.scss";

const CounterSection = () => {
  const steps = [
    { count: "10+", subTitle: "Accredited Companies" },
    { count: "15+", subTitle: "Payment Partners" },
    { count: "10+", subTitle: "Logistic Partners" },
    { count: "10+", subTitle: "Request Under Review" },
  ];

  return (
    <Layout landing>
      <div className="flow-card-container">
        {steps.map((step, index) => (
          <CounterCard
            key={index}
            count={step.count}
            subTitle={step.subTitle}
          />
        ))}
      </div>

      <div className="view-more-container">
        <Link to="" className="view-more-desktop">
          <Button type="primaryOutlined" text="View More" />
        </Link>
      </div>
    </Layout>
  );
};

export default CounterSection;
