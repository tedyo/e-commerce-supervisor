import { useState } from "react";
import "./verifyAccount.scss";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import Timer from "../../../components/timer/Timer";
import { svgUrl } from "../../../utils/configs/assetsConfig";

// import lockIcon from "../../../assets/lock-icon.svg"; // Replace with your actual path

const VerifyAccount = () => {
  const [otp, setOtp] = useState("");
  const [timerCompleted, setTimerCompleted] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add OTP validation logic here
    console.log("OTP Submitted:", otp);
  };

  const resendOTP = () => {
    console.log("Resending OTP...");
    setTimerCompleted(false);
  };

  return (
    <div className="verify-container">
      <form className="verify-form" onSubmit={onSubmit}>
        <div className="lock-icon-wrapper">
          <img src={svgUrl + "lockicon.svg"} alt="lock" />
        </div>

        <h2 className="enter-code-header">Enter Code</h2>
        <p className="subtext">
          We sent OTP code to your organization email address
        </p>

        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          inputType="tel"
          inputStyle="otp-input"
          renderInput={(props) => <input {...props} placeholder="-" />}
        />

        <button
          type="submit"
          className="verify-btn"
          disabled={otp.length !== 4}
        >
          Verify Code
        </button>

        <div className="resend-section">
          <p>Didn't receive the code?</p>
          {timerCompleted ? (
            <span className="resend-link" onClick={resendOTP}>
              Resend code
            </span>
          ) : (
            <div className="resend-text">
              <span>Resend code in</span>
              <Timer setTimerCompleted={setTimerCompleted} />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default VerifyAccount;
