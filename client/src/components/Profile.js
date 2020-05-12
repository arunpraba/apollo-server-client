import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Header from './Header'
import Layout from './Layout'
import LaunchItem from './LaunchItem'
import { GET_MY_TRIPS } from '../apollo/queries'

const Profile = () => {
  const { data, loading, error } = useQuery(GET_MY_TRIPS, {
    fetchPolicy: 'network-only',
  })
  return (
    <Layout loading={loading} error={error}>
      <Header>My Trips</Header>
      {data && data.me && data.me.trips.length ? (
        data.me.trips.map((launch) => (
          <LaunchItem key={launch.id} launch={launch} />
        ))
      ) : (
        <p>You haven't booked any trips</p>
      )}
    </Layout>
  )
}

export default Profile
