import React from 'react'
import './styles/main.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { AuthProvider } from './components/providers/AuthProvider'
import PrivateRoute from './components/auth/PrivateRoute'
import PublicRoute from './components/auth/PublicRoute'
import NavBar from './components/NavBar'

const App: React.FC = () => {
  return (
    <AuthProvider>
      <NavBar />
      <Router>
        <PrivateRoute exact path="/" component={Home} />
        <PublicRoute exact path="/signup" component={SignUp} restricted />
        <PublicRoute exact path="/login" component={Login} restricted />
      </Router>
    </AuthProvider>
  )
}

export default App
