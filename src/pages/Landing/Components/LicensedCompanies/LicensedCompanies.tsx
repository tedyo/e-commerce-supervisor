import Layout from "../../../../components/layout/Layout";
import "./licensedCompanies.scss";

const companyLogos = [
  "https://www.ethiotelecom.et/wp-content/uploads/2024/08/ethio_logo_full.png",
  "https://ethio.post/wp-content/uploads/2022/07/Website.png",
  "https://www.ethiotelecom.et/wp-content/uploads/2025/05/zemen-01-768x484.jpg",
];

const LicensedCompanies = () => {
  return (
    <Layout bgWhite>
      <section className="licensed-companies-section">
        <div className="text-center">
          <h2 className="section-title">Licensed Companies</h2>
          <p className="section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua quis
            ipsum suspendisse
          </p>
        </div>

        <div className="logos-grid">
          {companyLogos.map((logo, idx) => (
            <div className="logo-card" key={idx}>
              <img src={logo} alt={`Company ${idx + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default LicensedCompanies;
