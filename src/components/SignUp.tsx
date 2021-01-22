import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'
import { useInput } from './hooks/useInput'
import firebaseApp from '../firebase'
import 'react-toastify/dist/ReactToastify.css'

const SignUp: React.FC = () => {
  const { value: email, onChange: onChangeEmail } = useInput('')
  const { value: password, onChange: onChangePassword } = useInput('')
  const notify = (message: string) => toast.error(message)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((onError) => {
        notify(onError.message)
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
          Sign Up
        </button>
        <div className="auth__link">
          {' '}
          Already have an account? <Link to="/login"> Sign In</Link>
        </div>
      </form>
    </div>
  )
}

export default SignUp
