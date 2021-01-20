/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react'
import {
  Route,
  Redirect,
  RouteComponentProps,
  RouteProps,
} from 'react-router-dom'

import { AuthContext } from './AuthProvider'

interface IPrivateRouteProps extends RouteProps {
  component: React.ComponentType<RouteComponentProps>
}

const PrivateRoute = ({
  component: RouteComponent,
  ...rest
}: IPrivateRouteProps) => {
  const currentUser = useContext(AuthContext)

  return (
    <Route
      exact
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
