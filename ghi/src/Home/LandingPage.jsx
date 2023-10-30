import LinkyLogo from "../Images/logo-512x512.png";
import { NavLink } from "react-router-dom";
import LoginForm from "../Global/LoginForm";

const LandingPage = ({ account }) => {
  return (
    <>
      <div className="container d-flex align-items-center flex-column">
        <img className="masthead-logo mb-5 pt-4" src={LinkyLogo} alt="..." />
        <h1 className="masthead-heading text-uppercase mb-0">
          Welcome to Linky!
        </h1>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-line"></div>
        </div>
        <p className="masthead-subheading font-weight-light mb-5">
          A link sharing platform
        </p>
        <div>
          <NavLink to="signup" className="btn me-4" id="btn2">
            Sign Up
          </NavLink>
          <button
            type="button"
            className="btn ms-4"
            id="btn"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop2"
          >
            Login
          </button>
        </div>
      </div>
      <div
        className="modal fade"
        id="staticBackdrop2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel2">
                Login
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                {!account && <LoginForm></LoginForm>}
                {account && <p>Thanks for logging in!</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
