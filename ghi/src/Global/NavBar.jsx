import { React } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useGetAccountQuery, useLogoutMutation } from "../app/apiSlice";
import LoginForm from "./LoginForm";

const NavBar = () => {
  const { data: account, isLoading } = useGetAccountQuery();
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  const logoutAndRedirect = () => {
    logout();
    navigate("/");
    window.location.reload(false);
  };

  if (isLoading) {
    return null;
  }

  return (
    // <nav className="navbar navbar-dark bg-dark  navbar-expand-lg">
    //   <div className="container-fluid">
    //     <Link className="navbar-brand" to="/">
    //       Linky
    //     </Link>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#">
    //             Home
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Link
    //           </a>
    //         </li>
    //         <li className="nav-item dropdown">
    //           <a
    //             className="nav-link dropdown-toggle"
    //             href="#"
    //             role="button"
    //             data-bs-toggle="dropdown"
    //             aria-expanded="false"
    //           >
    //             Dropdown
    //           </a>
    //           <ul className="dropdown-menu">
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Action
    //               </a>
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Another action
    //               </a>
    //             </li>
    //             <li>
    //               <hr className="dropdown-divider" />
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Something else here
    //               </a>
    //             </li>
    //           </ul>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link disabled" aria-disabled="true">
    //             Disabled
    //           </a>
    //         </li>
    //       </ul>
    //       <form className="d-flex" role="search">
    //         <input
    //           className="form-control me-2"
    //           type="search"
    //           placeholder="Search"
    //           aria-label="Search"
    //         />
    //         <button className="btn btn-outline-success" type="submit">
    //           Search
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </nav>
    <nav className="navbar navbar-dark bg-dark  navbar-expand-lg">
      <div className="container-fluid bg-dark">
    <Link className="navbar-brand" to="/">
      Linky
    </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {account && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Edit Links
                  </NavLink>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={`/${account.username}`}>
                    View My Linky
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="analytics">
                    Analytics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Share
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link" onClick={logoutAndRedirect}>
                    Logout
                  </button>
                </li>
              </>
            )}

            {!account && (
              <>
                <li className="nav-item">
                  <NavLink to="signup" className="nav-link">
                    Sign Up
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className="nav-link"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Login
                  </button>
                </li>
              </>
            )}
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">
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
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
