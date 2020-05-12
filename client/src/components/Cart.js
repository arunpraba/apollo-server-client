import React, { Fragment } from 'react'
import { useQuery } from '@apollo/react-hooks'
import Header from './Header'
import Layout from './Layout'
import { GET_CART_ITEMS } from '../apollo/queries'

const CartItem = ({ launchId }) => <p>{launchId}</p>

const Cart = () => {
  const { data, loading, error } = useQuery(GET_CART_ITEMS)

  return (
    <Layout loading={loading} error={error}>
      <Header>My Cart</Header>
      {!data || (!!data && data.cartItems.length === 0) ? (
        <p data-testid="empty-message">No items in your cart</p>
      ) : (
        <Fragment>
          {!!data &&
            data.cartItems.map((launchId) => (
              <CartItem key={launchId} launchId={launchId} />
            ))}
        </Fragment>
      )}
    </Layout>
  )
}

export default Cart
