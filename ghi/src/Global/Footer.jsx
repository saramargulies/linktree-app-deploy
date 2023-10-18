import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <footer className="footer">
        <div className="pt-4 px-3">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4">
              <h5 className="mb-3">Linky</h5>
              <p>
                This app was made by Brad Cochi and Sara Margulies using
                FastAPI, React, and Redux Toolkit
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="mb-3">Project Information</h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <a href="#!">Frequently Asked Questions</a>
                </li>
                <li className="mb-1">
                  Brad Cochi's{" "}
                  <Link
                    to="https://www.linkedin.com/in/brad-cochi/"
                    target="_blank"
                  >
                    LinkedIn
                  </Link>{" "}
                  |{" "}
                  <Link to="https://www.bradcochi.com/" target="_blank">
                    Portfolio
                  </Link>{" "}
                  |{" "}
                  <Link to="https://github.com/bradcochi/" target="_blank">
                    Github
                  </Link>{" "}
                  |{" "}
                  <Link to="https://gitlab.com/bradcochi" target="_blank">
                    Gitlab
                  </Link>
                </li>
                <li className="mb-1">
                  Sara Margulies's{" "}
                  <Link
                    to="https://www.linkedin.com/in/sara-margulies/"
                    target="_blank"
                  >
                    LinkedIn
                  </Link>{" "}
                  | <Link to="#!">Portfolio</Link> |{" "}
                  <Link to="https://github.com/saramargulies" target="_blank">
                    Github
                  </Link>{" "}
                  |{" "}
                  <Link to="https://gitlab.com/saramargs" target="_blank">
                    Gitlab
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="mb-1">Repository</h5>
              <div>
                <a
                  href="https://github.com/bradcochi/linktree-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
