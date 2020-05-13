import React, { Fragment } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import Header from './Header'
import Layout from './Layout'
import CartItem from './CartItem'
import { GET_CART_ITEMS, GET_LAUNCH_DETAILS } from '../apollo/queries'
import { BOOK_TRIPS } from '../apollo/mutations'

const Cart = () => {
  const { data } = useQuery(GET_CART_ITEMS)
  const history = useHistory()
  const cartItems = data ? data.cartItems : []
  const [bookTrips, { loading, error }] = useMutation(BOOK_TRIPS, {
    variables: { launchIds: cartItems },
    refetchQueries: cartItems.map((launchId) => ({
      query: GET_LAUNCH_DETAILS,
      variables: { launchId },
    })),
    update(cache) {
      history.push('/me')
      cache.writeData({ data: { cartItems: [] } })
    },
  })

  return (
    <Layout loading={loading} error={error}>
      <Header>My Cart</Header>
      {!data || (!!data && data.cartItems.length === 0) ? (
        <div className="alert alert-danger text-center" role="alert">
          No items in your cart
        </div>
      ) : (
        <Fragment>
          {!!data && (
            <Fragment>
              <button
                type="button"
                class="btn btn-primary btn-lg btn-block mb-2"
                onClick={bookTrips}
              >
                Book All Trips
              </button>
              {data.cartItems.map((launchId) => (
                <CartItem key={launchId} launchId={launchId} />
              ))}
            </Fragment>
          )}
        </Fragment>
      )}
    </Layout>
  )
}

export default Cart
