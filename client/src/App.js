import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import LaunchList from './components/LaunchList'
import Profile from './components/Profile'
import LaunchDetail from './components/LaunchDetail'
import Navbar from './components/Navbar'
import Login from './components/Login'
import { IS_LOGGED_IN } from './apollo/queries'
import Cart from './components/Cart'
import './App.css'

function App() {
  const { data } = useQuery(IS_LOGGED_IN)
  if (data && data.isLoggedIn) {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact component={LaunchList} />
          <Route path="/me" exact component={Profile} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/:id" exact component={LaunchDetail} />
        </Switch>
      </>
    )
  } else {
    return <Login />
  }
}

export default App
