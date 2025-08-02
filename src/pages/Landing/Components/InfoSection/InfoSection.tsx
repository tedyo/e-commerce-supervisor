import { Link } from "react-router-dom";
import "./infoSection.scss";
import Layout from "../../../../components/layout/Layout";

const steps = [
  "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do",
  "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do",
  "Lorem ipsum dolor sit amet consectetur adipiscing elit sed doLorem ipsum dolor sit amet consectetur adipiscing elit sed do",
  "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do",
];

const benefits = [
  "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do",
  "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do",
  "Lorem ipsum dolor sit amet consectetur adipiscing elit sed doLorem ipsum dolor sit amet consectetur adipiscing elit sed do",
  "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do",
];

const InfoSection = () => {
  return (
    <Layout landing>
      <div className="info-section-wrapper">
        <div className="info-columns">
          {/* Left */}
          <div className="info-left">
            <h2>
              How to get an E-Commerce operators / Intra-platform operators
              License
            </h2>
            <ul>
              {steps.map((text, index) => (
                <li key={index}>
                  <span className="dot" />
                  <div>
                    <strong>Step {index + 1}</strong>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="vertical-divider" />

          {/* Right */}
          <div className="info-right">
            <h2>Benefits of E-Commerce License</h2>
            <ul>
              {benefits.map((text, index) => (
                <li key={index}>
                  <span className="dot" />
                  <div>
                    <strong>Benefit {index + 1}</strong>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Apply Now Button */}
        <div className="apply-now-container">
          <Link to="" className="apply-now-btn">
            Apply Now →
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default InfoSection;
