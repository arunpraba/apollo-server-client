import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'

const List = ({ name, ...rest }) => (
  <li className="nav-item mr-3">
    <NavLink className="nav-link text-white px-3" {...rest}>
      {name}
    </NavLink>
  </li>
)
const Logout = () => {
  const history = useHistory()
  return (
    <li className="nav-item mr-3">
      <button
        className="nav-link text-white px-3 btn"
        onClick={() => {
          localStorage.setItem('token', '')
          history.push('/')
        }}
      >
        Logout
      </button>
    </li>
  )
}

const Navbar = () => {
  const token = localStorage.getItem('token')
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow">
      <ul className="navbar-nav flex-row">
        <List to="/" exact name="Home" />
        <List to="/me" exact name="Me" />
        <List to="/cart" exact name="Cart" />
        {token ? <Logout /> : <List to="/login" exact name="Login" />}
      </ul>
    </nav>
  )
}

export default Navbar
