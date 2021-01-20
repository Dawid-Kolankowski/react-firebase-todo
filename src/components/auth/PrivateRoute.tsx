/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react'
import { Route, Redirect, RouteComponentProps } from 'react-router-dom'
import { AuthContext } from './AuthProvider'

const PrivateRoute = ({
  component: RouteComponent,
  ...rest
}: {
  component: React.ComponentType<RouteComponentProps>
}) => {
  const currentUser = useContext(AuthContext)

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  )
}

export default PrivateRoute
