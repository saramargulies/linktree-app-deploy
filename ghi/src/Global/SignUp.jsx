import { useSignupMutation } from "../app/apiSlice";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AlertError from "./AlertError";
import "./UpdatePasswordContainer.css";
import MustContainItem from "./MustContainItem";

const SignUp = () => {
  const navigate = useNavigate();
  const [signup, signupResult] = useSignupMutation();
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [containsUL, setContainsUL] = useState(false);
  const [containsLL, setContainsLL] = useState(false);
  const [containsN, setContainsN] = useState(false);
  const [containsSC, setContainsSC] = useState(false);
  const [contains8C, setContains8C] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);

  const [allValid, setAllValid] = useState(false);

  const mustContainData = [
    ["An uppercase letter (a-z)", containsUL],
    ["A lowercase letter (A-Z)", containsLL],
    ["A number (0-9)", containsN],
    ["A special character (!@#$)", containsSC],
    ["At least 8 characters", contains8C],
    ["Passwords match", passwordMatch],
  ];

  useEffect(() => {
    if (signupResult.error) {
      console.log(signupResult?.error);
      setErrorMessage(signupResult?.error?.data?.detail);
    }
    if (signupResult.isSuccess) navigate("/");
  }, [signupResult, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (allValid === false) {
      setErrorMessage("Invalid or non-matching passwords");
      return;
    }
    signup({ first_name, last_name, email, username, password });
  };

  const validatePassword = () => {
    if (password.toLowerCase() != password) setContainsUL(true);
    else setContainsUL(false);

    if (password.toUpperCase() != password) setContainsLL(true);
    else setContainsLL(false);

    if (/\d/.test(password)) setContainsN(true);
    else setContainsN(false);

    if (/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(password))
      setContainsSC(true);
    else setContainsSC(false);

    if (password.length >= 8) setContains8C(true);
    else setContains8C(false);

    if (password !== "" && password === passwordConfirmation)
      setPasswordMatch(true);
    else setPasswordMatch(false);

    if (
      containsUL &&
      containsLL &&
      containsN &&
      containsSC &&
      contains8C &&
      passwordMatch
    )
      setAllValid(true);
    else setAllValid(false);
  };

  return (
    <div className="page-container m-4">
      <div className="spacer"></div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1>SignUp</h1>
          <form onSubmit={handleSubmit}>
            <div className="row">
            <div className="col mb-3">
              <label htmlFor="SignUp__first_name" className="form-label">
                First Name (optional)
              </label>
              <input
                type="text"
                className="form-control"
                id="SignUp__first_name"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="col mb-3">
              <label htmlFor="SignUp__last_name" className="form-label">
                Last Name (optional)
              </label>
              <input
                type="text"
                className="form-control"
                id="SignUp__last_name"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            </div>
            <div className="row">
              
            </div>
            <div className="mb-3">
              <label htmlFor="SignUp__email" className="form-label">
                Email (optional)
              </label>
              <input
                type="text"
                className="form-control"
                id="SignUp__email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="SignUp__username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="SignUp__username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                minLength={3}
                required
              />
            </div>
            <div className="row">
            <div className="mb-3 col">
              <label htmlFor="SignUp__password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="SignUp__password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMessage("");
                }}
                onKeyUp={validatePassword}
                required
              />
            </div>
            <div className="mb-3 col">
              <label
                htmlFor="SignUp__password_confirmation"
                className="form-label"
              >
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="SignUp__password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => {
                  setPasswordConfirmation(e.target.value);
                  setErrorMessage("");
                }}
                onKeyUp={validatePassword}
                required
              />
            </div>              
              </div>

            {errorMessage && <AlertError>{errorMessage}</AlertError>}
            <div className="must-container card">
              <div className="card-header">Password must contain:</div>
              <ul className="list-group list-group-flush">
                {mustContainData.map((data) => (
                  <MustContainItem data={data} key={data}/>
                ))}
              </ul>
            </div>
            <button
              type="submit"
              className="btn btn-success mt-3"
              style={{ color: "#f8f8ff" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  );
};

export default SignUp;
