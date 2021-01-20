import React, { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import firebaseApp from '../../firebase'

export const AuthContext = React.createContext<firebase.User | null>(null)

export const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null)

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => setCurrentUser(user))
  }, [])

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  )
}
