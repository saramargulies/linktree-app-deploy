import React, { useState, useEffect } from "react";
import { useLoginMutation } from "../app/apiSlice";
import { useNavigate } from "react-router-dom";
import AlertError from "./AlertError";

function LoginForm() {
  const navigate = useNavigate();
  const [login, loginResult] = useLoginMutation();
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (loginResult.error) {
      setErrorMessage("Incorrect username or password");
    }
    if (loginResult.isSuccess) {
      navigate("/");
    }
  }, [loginResult, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ password, username });
    navigate("/");
  };

  const handleLinkChange = (event) => {
    const data = event.target.value;
    setUsername(data);
  };

  const handleNameChange = (event) => {
    const data = event.target.value;
    setPassword(data);
  };

  return (
    <div className="card-body">
      <p className="h4"></p>
      <form onSubmit={handleSubmit} id="review-form">
        {errorMessage && <AlertError>{errorMessage}</AlertError>}
        <div className="mb-3">
          <input
            className="form-control"
            onChange={handleNameChange}
            placeholder="Username"
            name="username"
            id="username"
          ></input>
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            onChange={handleLinkChange}
            placeholder="Password"
            name="link"
            id="link"
            type="password"
          ></input>
        </div>
        <div className="mb-3">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
