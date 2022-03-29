import React from 'react'

export const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container-fluid">
        <div className="navbar-brand">
            
            <i className="fa-solid fa-align-justify"></i>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
            <form className="d-flex me-4">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

            <div className="nav-item dropdown">
            <div className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Feri
            </div>
            <ul className="dropdown-menu dropdown-menu-light dropdown-menu-start" aria-labelledby="navbarDarkDropdownMenuLink">
                <li><div className="dropdown-item" >Login</div></li>
                
            </ul>
            </div>

        </div>
        </div>
    </nav>
    </>
  )
}
