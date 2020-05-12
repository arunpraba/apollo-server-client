import React from 'react'
import { NavLink } from 'react-router-dom'

const List = ({ name, ...rest }) => (
  <li className="nav-item">
    <NavLink className="nav-link" {...rest}>
      {name}
    </NavLink>
  </li>
)

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink className="navbar-brand" to="/">
        Home
      </NavLink>
      <ul className="navbar-nav">
        <List to="/me" exact name="Me" />
      </ul>
    </nav>
  )
}

export default Navbar
