import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import LaunchList from './components/LaunchList'
import Profile from './components/Profile'
import LaunchDetail from './components/LaunchDetail'

function App() {
  return (
    <Switch>
      <Route path="/" exact component={LaunchList} />
      <Route path="/me" exact component={Profile} />
      <Route path="/:id" exact component={LaunchDetail} />
    </Switch>
  )
}

export default App
