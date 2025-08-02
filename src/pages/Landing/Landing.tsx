import CounterSection from "./Components/counterSection/Counter";
import HeroSection from "./Components/heroSection/HeroSection";
import InfoSection from "./Components/InfoSection/InfoSection";
import LicensedCompanies from "./Components/LicensedCompanies/LicensedCompanies";
import NewsSection from "./Components/newsSection/NewsSection";
import PartnersSection from "./Components/partnersSection/PartnersSection";

import "./landing.scss";
const Landing = () => {
  return (
    <div className="landing-page">
      <HeroSection />
      <CounterSection />
      <NewsSection />
      <InfoSection />
      <LicensedCompanies />
      <PartnersSection />
    </div>
  );
};

export default Landing;
