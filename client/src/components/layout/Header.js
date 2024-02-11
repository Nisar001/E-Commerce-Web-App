import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import {CiShop} from 'react-icons/ci'
import { useAuth } from '../../context/auth'
import toast from 'react-hot-toast'

const Header = () => {

  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...setAuth,
      user:null,
      token:""
    })
    localStorage.removeItem('auth');
    toast.success("Logout Successfully");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand">
    <CiShop/> Ecommerce App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/category" className="nav-link">Category</NavLink>
        </li>
        {
          !auth.user ? (
          <>
          <li className="nav-item">
          <NavLink to="/register" className="nav-link">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  to="/login" className="nav-link">Login</NavLink>
        </li>
          </>
          ) : (
          <>
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {auth?.user?.name}
            </NavLink>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><NavLink className="dropdown-item" to="/dashboard">Dashboard</NavLink>
          </li>
          <li><NavLink  to="/login" onClick={handleLogout} className="dropdown-item">Logout</NavLink></li>
            </ul>
          </li>

          </>
          )
        }
        <li className="nav-item">
          <NavLink to="/cart" className="nav-link">Cart (0)</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Header