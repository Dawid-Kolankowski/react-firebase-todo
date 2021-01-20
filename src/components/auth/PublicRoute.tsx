/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react'
import { Route, Redirect, RouteComponentProps } from 'react-router-dom'
import { AuthContext } from './AuthProvider'

const PublicRoute = ({
  component: RouteComponent,
  restricted,
  ...rest
}: {
  restricted: boolean
  component: React.ComponentType<RouteComponentProps>
}) => {
  const currentUser = useContext(AuthContext)

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        currentUser && restricted ? (
          <Redirect to="/" />
        ) : (
          <RouteComponent {...routeProps} />
        )
      }
    />
  )
}

export default PublicRoute
