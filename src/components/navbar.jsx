import React from 'react'
import { Link } from 'gatsby'
import pages from '../util/pages'
import '../styles/navbar.scss'

const NavBar = () => (
  <div id="navbar">
    {pages.map(({ path, name, id }) => (
      <NavElement key={id} path={path}>
        {name}
      </NavElement>
    ))}
  </div>
)

const NavElement = ({ children, path }) => (
  <span className="navbar-element">
    <Link to={path}>{children}</Link>
  </span>
)

export default NavBar
