import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import firebaseApp, { provider } from '../firebase'
import { useInput } from './hooks/useInput'

const logInWithGoogle = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault()
  firebaseApp.auth().signInWithPopup(provider)
}

const Login: React.FC = () => {
  const { value: email, onChange: onChangeEmail } = useInput('')
  const { value: password, onChange: onChangePassword } = useInput('')
  const notify = (message: string) => toast.error(message)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        notify(error.message)
      })
  }

  return (
    <div className="content-wrapper auth">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label htmlFor="email" className="auth__label">
          Email
          <input
            className="auth__input"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={onChangeEmail}
          />
        </label>
        <label htmlFor="password" className="auth__label">
          Password
          <input
            className="auth__input"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onChangePassword}
          />
        </label>
        <button type="submit" className="button">
          Sign In
        </button>

        <button onClick={logInWithGoogle} type="button" className="button">
          Sign in with google
        </button>
      </form>
    </div>
  )
}

export default Login
