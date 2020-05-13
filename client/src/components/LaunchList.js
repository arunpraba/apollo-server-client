import React, { Fragment } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_LAUNCHES } from '../apollo/queries'
import Layout from './Layout'
import LaunchItem from './LaunchItem'
import Header from './Header'

const LaunchList = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_LAUNCHES)

  const isList = data && data.launches && data.launches.launches

  const loadMore = () => {
    fetchMore({
      variables: {
        after: data.launches.cursor,
      },
      updateQuery: (prev, { fetchMoreResult, ...rest }) => {
        if (!fetchMoreResult) return prev
        return {
          ...fetchMoreResult,
          launches: {
            ...fetchMoreResult.launches,
            launches: [
              ...prev.launches.launches,
              ...fetchMoreResult.launches.launches,
            ],
          },
        }
      },
    })
  }

  return (
    <Layout loading={loading} error={error}>
      {data && (
        <Fragment>
          <Header>Upcoming Launches</Header>

          <div className="row row-cols-1 row-cols-md-3 mt-4">
            {isList &&
              data.launches.launches.map((launch) => (
                <LaunchItem key={launch.id} launch={launch} list />
              ))}
          </div>
          {isList && (
            <button
              type="button"
              className="btn btn-info btn-block"
              onClick={loadMore}
            >
              Load More
            </button>
          )}
        </Fragment>
      )}
    </Layout>
  )
}

export default LaunchList
