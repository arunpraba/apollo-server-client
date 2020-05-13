import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-hooks'
import './index.css'
import App from './App'
import { typeDefs, resolvers } from './apollo/resolvers'

const cache = new InMemoryCache()
const link = new HttpLink({
  headers: { authorization: localStorage.getItem('token') },
  uri: 'http://localhost:4000/',
})

cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem('token'),
    cartItems: [],
  },
})

const client = new ApolloClient({
  cache,
  link,
  typeDefs,
  resolvers,
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
