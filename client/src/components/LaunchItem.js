import React from 'react'
import { useHistory } from 'react-router-dom'
import ActionButton from './ActionButton'

const LaunchItem = ({ launch, list }) => {
  const { id, isBooked, mission, rocket, isInCart } = launch
  const history = useHistory()

  const handleClick = () => {
    if (list) {
      history.push(`/${id}`)
    }
  }

  return (
    <div className="col mb-4">
      <div
        className="card shadow text-center p-2 pointer"
        onClick={handleClick}
      >
        <img
          className="card-img-top mx-auto"
          src={mission.missionPatch}
          alt={mission.name}
        />
        <div className="card-body">
          <h5 className="text-secondary">{rocket.name}</h5>
          <h2 className="h4 text-black">{mission.name}</h2>
          <div>
            <span className="text-secondary">Booked Status </span>
            <span className={`text-${isBooked ? 'danger' : 'success'} h5`}>
              {isBooked ? 'Booked' : 'Open'}
            </span>
          </div>
        </div>
        {!list && (
          <div className="card-footer border-0 bg-white">
            <ActionButton isBooked={isBooked} id={id} isInCart={isInCart} />
          </div>
        )}
      </div>
    </div>
  )
}

export default LaunchItem
