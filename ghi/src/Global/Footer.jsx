import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
<div className="container my-5">

    <footer>
    <div className="container p-4">
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4">
          <h5 className="mb-3" >Linky</h5>
          <p>
            This app was made by Brad Cochi and Sara Margulies using FastAPI, React, and Redux Toolkit
          </p>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <h5 className="mb-3" >Project Information</h5>
          <ul className="list-unstyled mb-0">
            <li className="mb-1">
              <a href="#!">Frequently Asked Questions</a>
            </li>
            <li className="mb-1">
            Brad Cochi's <a href="#!" >LinkedIn</a> | <a href="#!" >Portfolio</a>
            </li>
            <li className="mb-1">
            Sara Margulies <a href="#!" >LinkedIn</a> | <a href="#!" >Portfolio</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <h5 className="mb-1" >Repository</h5>
          <div>
            <a href="https://github.com/bradcochi/linktree-app">Github Repo</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
</div>
    </footer>
  );
};

export default Footer;
