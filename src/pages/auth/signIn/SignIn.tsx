import { useNavigate } from "react-router-dom";
import Layout from "../../../components/layout/Layout";
import "./signIn.scss";

const SignIn = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/configuration/service");
  };
  return (
    <Layout>
      <div className="signin-container">
        <div className="login-card">
          <h2 className="login-title">Login</h2>
          <div className="welcome-wrapper">
            <span className="line"></span>
            <p className="welcome-text">Welcome Back</p>
            <span className="line"></span>
          </div>

          <form className="login-form">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" placeholder="Enter your email" />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />

            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="login-button"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>

          <div className="or-divider">or</div>

          <button className="google-login-button">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google logo"
              className="google-icon"
            />
            Login with Google
          </button>

          <p className="signup-text">
            You don’t have an account yet? <a href="/sign-up">Sign up</a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
