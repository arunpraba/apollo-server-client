import React, { Fragment } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import Layout from './Layout'
import { GET_LAUNCH_DETAILS } from '../apollo/queries'
import LaunchItem from './LaunchItem'
import Header from './Header'

const LaunchDetail = () => {
  const { id } = useParams()

  const { loading, data, error } = useQuery(GET_LAUNCH_DETAILS, {
    variables: {
      launchId: id,
    },
  })

  return (
    <Layout loading={loading} error={error}>
      {data && data.launch && (
        <Fragment>
          <Header>{data.launch.site} Launch Detail</Header>
          <Link type="button" to="/" className="btn btn-secondary">
            Back
          </Link>
          <div className="row row-cols-1 row-cols-md-1 mt-4">
            <LaunchItem launch={data.launch} />
          </div>
        </Fragment>
      )}
    </Layout>
  )
}

export default LaunchDetail
