import React from 'react'
import './styles/main.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { AuthProvider } from './components/auth/AuthProvider'
import PrivateRoute from './components/auth/PrivateRoute'
import PublicRoute from './components/auth/PublicRoute'

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        {/* @ts-ignore */}
        <PrivateRoute exact path="/" component={Home} />

        {/* <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/SignUp" component={SignUp} /> */}
      </Router>
    </AuthProvider>
  )
}

export default App
