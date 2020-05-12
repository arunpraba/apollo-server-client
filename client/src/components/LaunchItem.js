import React from 'react'
import { useHistory } from 'react-router-dom'

const LaunchItem = ({ launch }) => {
  const { id, isBooked, mission, rocket } = launch
  const history = useHistory()

  return (
    <div className="col mb-4">
      <div
        className="card shadow text-center p-2 pointer"
        onClick={() => history.push(`/${id}`)}
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
              {isBooked ? 'Closed' : 'Open'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LaunchItem
