import React from 'react'

const Header = ({ children, className }) => (
  <h1 className={`text-center text-4xl text-grey-900 pt-3 ${className}`}>
    {children}
  </h1>
)

export default Header
