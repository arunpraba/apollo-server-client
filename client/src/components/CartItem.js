import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_LAUNCH_DETAILS } from '../apollo/queries'
import { TOGGLE_CART } from '../apollo/mutations'

const CartItem = ({ launchId }) => {
  const { data, loading, error } = useQuery(GET_LAUNCH_DETAILS, {
    variables: { launchId },
  })
  const [toggleCart] = useMutation(TOGGLE_CART, {
    variables: {
      launchId,
    },
    refetchQueries: [{ query: GET_LAUNCH_DETAILS, variables: { launchId } }],
  })
  const isLaunch = data && data.launch
  const launch = isLaunch ? data.launch : {}

  if (loading)
    return (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    )

  if (error)
    return (
      <div className="alert alert-danger" role="alert">
        {error.message}
      </div>
    )

  return (
    isLaunch && (
      <li className="media d-flex align-items-center bg-white p-2 border rounded">
        <img
          src={launch.mission.missionPatch}
          className="mr-3 img-media"
          alt={launch.mission.name}
        />
        <div className="media-body">
          <h5 className="mt-0 mb-1">{launch.rocket.name}</h5>
        </div>
        <button
          type="button"
          className="close pr-2"
          aria-label="Close"
          onClick={toggleCart}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </li>
    )
  )
}

export default CartItem
