import React from 'react'
import { useInput } from './hooks/useInput'

const SignUp: React.FC = () => {
  const { value: email, onChange: onChangeEmail } = useInput('')
  const { value: password, onChange: onChangePassword } = useInput('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(email, password)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={onChangeEmail}
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onChangePassword}
          />
        </label>
        <button type="submit">Sign Up</button>
        or
        <button type="button">Sign Up with google</button>
      </form>
    </div>
  )
}

export default SignUp
