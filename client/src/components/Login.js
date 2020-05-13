import React, { useState } from 'react'
import { useMutation, useApolloClient } from '@apollo/react-hooks'
import Layout from './Layout'
import { LOGIN_USER } from '../apollo/mutations'
import Header from './Header'

const LoginForm = ({ login }) => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    login({ variables: { email } })
  }

  return (
    <form
      className="mx-auto"
      onSubmit={handleSubmit}
      style={{ width: '300px' }}
    >
      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <small className="form-text text-muted">
          Use any email example@example.com
        </small>
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  )
}

const Login = () => {
  const client = useApolloClient()
  const [login, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted({ login }) {
      localStorage.setItem('token', login)
      client.writeData({
        data: {
          isLoggedIn: true,
        },
      })
    },
  })

  return (
    <Layout loading={loading} error={error}>
      <div className="pt-5">
        <Header>Login</Header>
        <LoginForm login={login} />
      </div>
    </Layout>
  )
}

export default Login
