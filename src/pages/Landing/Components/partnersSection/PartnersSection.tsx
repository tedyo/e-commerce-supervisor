import Layout from "../../../../components/layout/Layout";
import "./partnersSection.scss";
const partnerLogos = [
  "https://www.insa.gov.et/o/insa/images/logo2.pngg",
  "https://etrade.gov.et/assets/logo/etrade-logo.png",
  "http://www.mor.gov.et/o/morA/images/logon.jpg",
  "https://tse4.mm.bing.net/th/id/OIP.axcuKSUuLUcgtnabMRxS5wAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
];

const PartnersSection = () => {
  return (
    <Layout>
      <section className="licensed-companies-section">
        <div className="text-center">
          <h2 className="section-title">Our Partners</h2>
        </div>

        <div className="logos-grid">
          {partnerLogos.map((logo, idx) => (
            <div className="logo-card" key={idx}>
              <img src={logo} alt={`Partner ${idx + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default PartnersSection;
