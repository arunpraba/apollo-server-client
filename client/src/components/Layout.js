import React from 'react'
import { Link } from 'react-router-dom'
import Loader from './Loader'

const center = {
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}

const Layout = ({ loading, error, children }) => {
  return (
    <div className="min-h-screen relative bg-light mb-5">
      {loading && (
        <div className="absolute" style={center}>
          <Loader />
        </div>
      )}
      {error && (
        <div className="absolute" style={center}>
          <h1>
            Something went wrong <Link to="/">go to home</Link>
          </h1>
        </div>
      )}
      <div className="container mx-auto">{children}</div>
    </div>
  )
}

export default Layout
