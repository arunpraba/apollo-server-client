import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { CANCEL_TRIP, TOGGLE_CART } from '../apollo/mutations'
import { GET_LAUNCH_DETAILS } from '../apollo/queries'

const ActionButton = ({ isBooked, id, isInCart }) => {
  const [mutate, { loading, error }] = useMutation(
    isBooked ? CANCEL_TRIP : TOGGLE_CART,
    {
      variables: {
        launchId: id,
      },
      refetchQueries: [
        { query: GET_LAUNCH_DETAILS, variables: { launchId: id } },
      ],
    }
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>An error occurred</p>

  return (
    <button
      onClick={() => {
        mutate()
      }}
      className={`m-2 btn btn-block btn-${
        isBooked ? 'danger' : isInCart ? 'success' : 'outline-primary'
      }`}
    >
      {isBooked
        ? 'Cancel This Trip'
        : isInCart
        ? 'Remove from Cart'
        : 'Add to Cart'}
    </button>
  )
}

export default ActionButton
