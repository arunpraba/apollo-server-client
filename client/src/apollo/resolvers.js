import gql from 'graphql-tag'
import { GET_CART_ITEMS } from './queries'

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
    cartItems: [ID!]!
  }

  extend type Launch {
    isInCart: Boolean!
  }

  extend type Mutation {
    addOrRemoveFromCart(id: ID!): [ID!]!
  }
`

export const resolvers = {
  Launch: {
    isInCart: (launch, _, { cache }) => {
      const queryResult = cache.readQuery({
        query: GET_CART_ITEMS,
      })
      if (queryResult) {
        return queryResult.cartItems.includes(launch.id)
      }
      return false
    },
  },
}
