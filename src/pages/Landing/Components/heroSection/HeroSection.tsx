import { svgUrl } from "../../../../utils/configs/assetsConfig";
import "./heroSection.scss";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay-content">
        <div className="left-content">
          <h1 className="hero-title">
            E-Commerce operator/Intra-Platform <br />
            Operators License
          </h1>
          <div className="hero-buttons">
            <button className="btn primary-btn">
              Apply Now <span className="arrow">→</span>
            </button>
            <button className="btn secondary-btn">
              Learn More <span className="arrow">→</span>
            </button>
          </div>
        </div>
        <div className="right-content">
          <img
            src={svgUrl + "logo.svg"}
            alt="Digital Ethiopia"
            className="digital-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
