import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useGetAccountQuery, useLoginMutation, useLogoutMutation } from '../app/apiSlice'

const NavBar = () => {
    // const { data: account, isLoading } = useGetAccountQuery()
    // const [logout] = useLogoutMutation()
    const navigate = useNavigate()

    const logoutAndRedirect = () => {
        // logout();
        navigate("/");
        window.location.reload(false);
      };

    // if (isLoading) {
    //     return null
    // }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" href="#">Linky</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="#">My Links</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
    )

}

export default NavBar