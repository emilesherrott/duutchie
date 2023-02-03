import React, { useEffect } from "react"
import { useNavigate, useLocation, NavLink, Link } from "react-router-dom"
import { userIsAuthenticated } from "../../helpers/auth"
import "./style.css"

const NavBar = ({ username }) => {

  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    userIsAuthenticated()
  }, [pathname])

  const handleClick = () => {
    navigate('/')
    window.localStorage.removeItem('token')
  }



  return (
    <nav>
      <div className="links">
        <div className="nav-links">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About Us
          </NavLink>
          { userIsAuthenticated() ? 
          <span className="nav-link">// Welcome {username}</span>
          :
          <></>
          }
        </div>
        { !userIsAuthenticated() ?
        <div className="auth-links">
          <Link to="/register" className="auth-link">Register</Link>
          <Link to="/sign-in" className="auth-link">Sign In</Link>
        </div>
        :
        <div className="auth-links">
          <Link to={"/profile"} className="auth-link">Profile</Link>
          <button onClick={handleClick}>Sign Out</button>
      </div>
        }
      </div>
    </nav>
  )
}

export default NavBar
