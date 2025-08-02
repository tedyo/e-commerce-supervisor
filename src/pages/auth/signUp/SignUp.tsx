import Layout from "../../../components/layout/Layout";
import Title from "../../../components/title/Title";
import "./SignUp.scss";

const SignUp = () => {
  return (
    <Layout>
      <div className="signup-wrapper">
        <Title type="primary">
          E-Commerce operators / Intra-platform operators Registration
        </Title>

        <div className="signup-card">
          <form className="signup-form">
            <div className="form-columns">
              <div className="form-left">
                <div className="form-group">
                  <label>Tin No *</label>
                  <input type="text" placeholder="Tin" />
                </div>

                <div className="form-group">
                  <label>Legal Condition *</label>
                  <select>
                    <option value="">Select</option>
                    <option value="sole">Sole Proprietor</option>
                    <option value="plc">PLC</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Company Name *</label>
                  <input type="text" placeholder="Company Name" />
                </div>

                <div className="form-group">
                  <label>የካምፓኒው ስም በአማርኛ *</label>
                  <input type="text" placeholder="የካምፓኒው ስም በአማርኛ" />
                </div>

                <div className="form-group">
                  <label>Company Name in English</label>
                  <input type="text" placeholder="Company Name in English" />
                </div>

                <div className="form-group">
                  <label>Manager Full Name *</label>
                  <input type="text" placeholder="Manager Full Name" />
                </div>

                <div className="form-group">
                  <label>የስራ አስኪያጅ ስም በአማርኛ *</label>
                  <input type="text" placeholder="የስራ አስኪያጅ ስም በአማርኛ" />
                </div>
              </div>

              <div className="form-right">
                <div className="form-group">
                  <label>Manager Name in English</label>
                  <input type="text" placeholder="Manager Name in English" />
                </div>

                <div className="form-group">
                  <label>Region *</label>
                  <input type="text" placeholder="Region" />
                </div>

                <div className="form-group">
                  <label>Zone / Sub City *</label>
                  <input type="text" placeholder="Zone or Sub City" />
                </div>

                <div className="form-group">
                  <label>Woreda</label>
                  <input type="text" placeholder="Woreda" />
                </div>

                <div className="form-group">
                  <label>Kebele</label>
                  <select>
                    <option value="">Select</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" placeholder="Email" />
                </div>

                <div className="form-group">
                  <label>Mobile Phone *</label>
                  <input type="text" placeholder="Phone" />
                </div>
              </div>
            </div>

            <div className="form-actions">
              <div className="form-group checkbox">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">
                  I agree with the <a href="#">terms and conditions</a>
                </label>
              </div>

              <button type="submit" className="register-button">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
