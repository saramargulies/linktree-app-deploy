import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useGetAccountQuery, useLoginMutation, useLogoutMutation } from '../app/apiSlice'

const NavBar = () => {
    // const { data: account, isLoading } = useGetAccountQuery()
    // const [logout] = useLogoutMutation()
    // const navigate = useNavigate()

    // const logoutAndRedirect = () => {
    //     logout();
    //     navigate("/");
    //     window.location.reload(false);
    //   };

    // if (isLoading) {
    //     return null
    // }

    return (
        <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg p-0 custom-nav">
        <div className="container-custom container">
          <div className="navbar-brand">
            <span className="navbar-caption-wrap">
            </span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="material-icons-outlined">menu</span>
          </button>
        {/* change "true" to "account" once back end/redux finished */}
          {!true && (
            <div className="navbar-nav-container">
              <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
                <li className="nav-item">
                  <NavLink to="signup" className="btn btn-primary display-7 me-3">
                    Sign Up
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="login"
                    className="btn btn-outline-primary display-7"
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
          {true && (
            <button
              className="btn btn-primary display-7"
              onClick={logoutAndRedirect}
            >
              Log Out
            </button>
          )}
        </div>
      </nav>
    )

}

export default NavBar