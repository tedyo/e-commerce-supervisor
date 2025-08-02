import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import "./footer.scss";
import { svgUrl } from "../../utils/configs/assetsConfig";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="top">
          {/* Logo & Info */}
          <div className="column info-section">
            <img src={svgUrl + "logo.svg"} alt="mint logo" />
            <p className="amharic-title">ኢ.ቲ.ዲጂታል ትብብር ግንባታ</p>
            <p className="desc">
              Lorem ipsum dolor amet magna set dolor sit amet consectetur
              adipiscing do elite labore. consectetur adipiscing do elite
            </p>
            <div className="social">
              <h4>Social Info</h4>
              <div className="icons">
                <Facebook />
                <Twitter />
                <Linkedin />
                <Instagram />
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="column links-section">
            <h4>Useful Links</h4>
            <a href="#">Ethiopian Revenue and Customs Authority</a>
            <a href="#">Ministry of Agriculture (MOA)</a>
            <a href="#">Ministry of Finance and Economic</a>
            <a href="#">Ministry of Foreign Affairs</a>
            <a href="#">Ministry of Trade (MOT)</a>
          </div>

          {/* Get In Touch */}
          <div className="column contact-section">
            <h4>Get In Touch</h4>
            <p>📞 +251 11 662 35 45</p>
            <p>✉️ epospea@gmail.com</p>
          </div>

          {/* Working Hours */}
          <div className="column hours-section">
            <h4>Working Hours</h4>
            <p>
              Monday <span>10.00 - 11.00</span>
            </p>
            <p>
              Tuesday <span>11.00 - 12.00</span>
            </p>
            <p>
              Wednesday <span>01.00 - 02.00</span>
            </p>
            <p>
              Thursday <span>02.00 - 03.00</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
