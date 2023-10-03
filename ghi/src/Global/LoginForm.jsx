import React, { useState } from "react";
import { useLoginMutation } from "../app/apiSlice";
import { useNavigate } from "react-router-dom";


function LoginForm() {

  const navigate = useNavigate()
  const [login] = useLoginMutation()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ name: password, link: username });
    navigate('/')
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

                          <div className="mb-3">
                            <input className="form-control"
                              onChange={handleNameChange}
                              placeholder="Username"
                              name="username"
                              id="username"
                            ></input>
                          </div>
                          <div className="mb-3">
                            <input className="form-control"
                              onChange={handleLinkChange}
                              placeholder="Password"
                              name="link"
                              id="link"
                            ></input>
                          </div>
                          <div className="mb-3">
                            <button className="btn btn-primary">
                            Login
                            </button>
                          </div>
                        
                        </form>
                    </div>
      
  );
}

export default LoginForm;
